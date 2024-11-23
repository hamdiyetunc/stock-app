import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import cors from "cors";
import mongoose from "mongoose";
import { User } from "./models/User";
import { UserHandler } from "./resource_handlers/IUser";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken";
import multer from "multer";
import fs from "fs";
import http from "http";
import { WebSocketServer as WSS, WebSocket } from "ws";
import { Message } from "./models/Message";
import Chat from "./models/Chats";
import path from "path";

const router = express.Router();
const uploadDirectory = path.join(__dirname, "../../uploads");

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
  console.log("Uploads directory created.");
} else {
  console.log("Uploads directory already exists.");
}

// CustomRequest type is an extended Request that includes the user field.
export interface CustomRequest extends Request {
  user?: JwtPayload | (string & { chatId?: string });
}

// Create token
const generateToken = (userId: string, chatId: string) => {
  return jwt.sign({ id: userId, chatId: chatId }, "SECRET_KEY", {
    expiresIn: "30d",
  });
};

const app = express();
const port = 5174;

dotenv.config();

const userHandler = new UserHandler();

// Set CORS policy to allow specific resource and cookies
app.use(
  cors({
    origin: "http://192.168.0.225:5173",
    credentials: true,
  }),
);

// Middleware setup
app.use(bodyParser.json());
app.use("/images", express.static("images"));

const server = http.createServer(app);
const WSSRequire = require("ws").Server;
const wss = new WebSocket.Server({ port: 5175 });

wss.on("connection", (ws: WebSocket) => {
  console.log("Client connected");

  ws.on("message", async (message: string) => {
    console.log("Received:", message);

    const responseMessage = {
      text: message,
      time: new Date().toLocaleTimeString(),
    };
    ws.send(JSON.stringify(responseMessage));

    try {
      const receivedMessage = JSON.parse(message);
      const { sender, recipient, text } = receivedMessage;
      const newMessage = new Message({ sender, recipient, text });

      await newMessage.save();

      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(newMessage));
        }
      });
    } catch (error) {
      console.error("Error processing message:", error);
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
console.log("WebSocket server is running on ws://localhost:5175/");

const socket = new WebSocket("ws://localhost:5175/");

socket.onopen = () => {
  console.log("WebSocket connection established");

  socket.send("Hello Server!");
};

socket.onmessage = (event) => {
  console.log("Message from server:", event.data);
};

socket.onclose = () => {
  console.log("WebSocket connection closed");
};

socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};
console.log("Client is trying to connect to ws://localhost:5175/");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// JWT Authentication Middleware
const authenticateJWT = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token
  if (!token) return res.sendStatus(401);

  jwt.verify(token, "SECRET_KEY", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; // Add the user to the request
    next();
  });
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

// Get users endpoint
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving users" });
  }
});

app.use("/uploads", express.static(uploadDirectory));

// Endpoint that returns user chats
app.get("/api/users/:userId/chats", authenticateJWT, async (req, res) => {
  try {
    const userId = req.params.userId;
    const chats = await Chat.find({ participants: userId });
    if (!chats) {
      return res.sendStatus(404);
    }
    res.json(chats);
  } catch (error) {
    console.error("Error fetching chats:", error);
    res.status(500).send((error as Error).message);
  }
});

// Endpoint that returns messages for a specific conversation
app.get("/api/chats/:chatId/messages", authenticateJWT, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId);
    if (!chat) {
      return res.sendStatus(404);
    }
    res.json(chat.messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).send((error as Error).message);
  }
});

// ChatList endpoint
app.get("/api/chatlist/:userId", authenticateJWT, async (req, res) => {
  const userId = req.params.userId;

  try {
    const chatList = await Chat.find({ participants: userId })
      .populate("participants", "name profilePicture status")
      .exec();

    console.log("Chat list after populate:", chatList);

    chatList.forEach((chat, index) => {
      console.log(`Chat #${index}:`, chat.participants);
      chat.participants.forEach((participant) => {
        console.log(`Participant data: ${participant}`);
      });
    });

    const filteredChatList = chatList
      .map((chat) => {
        chat.participants = chat.participants.filter(
          (participant) => participant._id.toString() !== userId,
        );
        return chat;
      })
      .filter((chat) => chat.participants.length > 0);

    if (filteredChatList.length === 0) {
      return res.status(404).json({ message: "Chat list not found." });
    }

    res.json(filteredChatList);
  } catch (error) {
    console.error("Error fetching chat list:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Messages delete endpoint
app.patch(
  "/api/chats/messages/:messageId/delete",
  authenticateJWT,
  async (req: CustomRequest, res: Response) => {
    const { messageId } = req.params;
    const userId = (req.user as JwtPayload)?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Find the chat the message belongs to
      const chat = await Chat.findOne({ "messages._id": messageId });

      if (!chat) {
        return res.status(404).json({ error: "Chat or message not found" });
      }

      // Find the message in the chat
      const message = chat.messages.find(
        (msg) => msg._id.toString() === messageId,
      );

      if (!message) {
        return res.status(404).json({ error: "Message not found" });
      }

      // if the message is already deleted by the user, return
      if (!message.deletedBy.includes(userId)) {
        message.deletedBy.push(userId);
      }

      // Add the user to the deletedBy list of the chat
      if (!chat.deletedBy.includes(userId)) {
        chat.deletedBy.push(userId);
      }
      await chat.save();

      res.status(200).json({ message: "Message deleted for this user." });
    } catch (error) {
      console.error("Error deleting message:", error);
      res.status(500).json({ error: "Could not delete message." });
    }
  },
);

// Chat messages delete endpoint
app.patch(
  "/api/chats/:chatId/messages",
  authenticateJWT,
  async (req: CustomRequest, res: Response) => {
    const { chatId } = req.params;
    const userId = (req.user as JwtPayload)?.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Find the chat
      const chat = await Chat.findById(chatId);

      if (!chat) {
        return res.status(404).json({ error: "Chat not found" });
      }
      // Add the user to the deletedBy list of the chat
      if (!chat.deletedBy.includes(userId)) {
        chat.deletedBy.push(userId);
      }

      // Add the user to the deletedBy list of all messages
      for (const message of chat.messages) {
        if (!message.deletedBy.includes(userId)) {
          message.deletedBy.push(userId);
        }
      }

      await chat.save();
      res.status(200).json({ message: "All messages deleted for this user." });
    } catch (error) {
      console.error("Error deleting messages:", error);
      res.status(500).json({ error: "Could not delete messages." });
    }
  },
);

// Messages endpoint
app.post(
  "/api/messages",
  authenticateJWT,
  async (req: CustomRequest, res: Response) => {
    const { receiverId, content } = req.body;

    // Check if req.user is defined
    if (!req.user) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const senderId = (req.user as JwtPayload).id;

    try {
      // Find an existing chat between users
      let chat = await Chat.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      // Create new message
      const newMessage = new Message({
        sender: senderId,
        receiver: receiverId,
        text: content,
        time: new Date(),
      });

      if (chat) {
        // If chat exists, add message to this chat
        chat.messages.push(newMessage);
        await chat.save(); // Update the chat
      } else {
        // If there is no chat, create a new chat
        chat = new Chat({
          participants: [senderId, receiverId],
          messages: [newMessage],
        });
        await chat.save(); // Save the new chat
      }

      // Save the message to the database
      await newMessage.save();

      // Return the message and chat ID to the frontend
      res.status(201).json({
        message: newMessage,
        chatId: chat._id, // Return the chat ID
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error saving message:", error.message);
        res
          .status(500)
          .send({ error: "Could not save message", details: error.message });
      } else {
        console.error("Unknown error:", error);
        res.status(500).send({ error: "Unknown error occurred" });
      }
    }
  },
);

app.put("/messages/:messageId", async (req: CustomRequest, res: Response) => {
  const { messageId } = req.params; // We get 'messageId' from URL parameter
  const { read, sent } = req.body; // We get 'read' and 'sent' information from body

  try {
    // We find the chat the message belongs to
    const chat = await Chat.findOne({ "messages._id": messageId });

    if (!chat) {
      return res.status(404).json({ error: "Chat or message not found" });
    }

    // We find the message
    const message = chat.messages.find(
      (msg) => msg._id.toString() === messageId,
    );

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    // We are updating the message
    message.read = read ?? message.read; // If there is 'read' information, it is updated
    message.sent = sent ?? message.sent; // If there is 'sent' information, it is updated

    await chat.save(); // We are saving the changes

    res.status(200).json(message); // We are returning the updated message
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.post(
  "/api/uploadProfilePic",
  authenticateJWT,
  upload.single("profilePicture"),
  async (req: CustomRequest, res: Response) => {
    const user = req.user;

    if (!user || typeof user === "string") {
      return res.status(400).send({ error: "Invalid user data" });
    }

    if (!req.file) {
      return res.status(400).send({ error: "No file uploaded" });
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        user.id,
        { profilePicture: `/uploads/${req.file.filename}` },
        { new: true },
      );

      if (!updatedUser) {
        return res.status(404).send({ error: "User not found" });
      }

      res.send({
        message: "Profile picture updated successfully",
        profilePicture: updatedUser.profilePicture,
      });
    } catch (error: unknown) {
      console.error("Error updating profile picture:", error);

      if (error instanceof Error) {
        res.status(500).send({
          error: "An error occurred while updating the profile picture",
          details: error.message,
        });
      } else {
        res.status(500).send({
          error: "An unknown error occurred",
        });
      }
    }
  },
);

// Profile update endpoint
app.post(
  "/api/updateProfile",
  authenticateJWT,
  async (req: CustomRequest, res: Response) => {
    const { name, status } = req.body;
    const user = req.user;

    if (typeof user === "string" || !user) {
      return res.status(400).send({ error: "Invalid user data" });
    }

    const userId = user.id;

    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $set: { name, status } },
        { new: true, runValidators: true },
      );

      if (!updatedUser) {
        return res.status(404).send({ error: "User not found" });
      }

      res.send({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
      console.error("Error updating profile:", error);
      res
        .status(500)
        .send({ error: "An error occurred while updating the profile" });
    }
  },
);

app.post(
  "/api/removeProfilePic",
  authenticateJWT,
  async (req: CustomRequest, res: Response) => {
    const user = req.user;

    if (typeof user === "string" || !user) {
      return res.status(400).send({ error: "Invalid user data" });
    }

    const userId = user.id;

    const profilePicPath = user.profilePicture
      ? `.${user.profilePicture}`
      : null;

    try {
      await User.updateOne({ _id: userId }, { $set: { profilePicture: null } });

      if (profilePicPath) {
        fs.unlinkSync(profilePicPath);
      }

      res.json({ message: "Profile picture removed successfully." });
    } catch (error) {
      console.error("Error removing profile picture:", error);
      res.status(500).json({ error: "Could not remove profile picture." });
    }
  },
);

// Get profile endpoint
app.get(
  "/api/getProfile",
  authenticateJWT,
  async (req: CustomRequest, res: Response) => {
    const user = req.user;

    if (typeof user === "string" || !user) {
      return res.status(400).send({ error: "Invalid user data" });
    }

    const userId = user.id;

    try {
      const userProfile = await User.findById(userId).select("-password");
      if (!userProfile) {
        return res.status(404).send({ error: "User not found" });
      }

      res.status(200).json(userProfile);
    } catch (error) {
      console.error("Error fetching profile:", error);
      res
        .status(500)
        .send({ error: "An error occurred while fetching the profile" });
    }
  },
);

// Signup endpoint
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email address and password are required" });
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Prepare user data
  const newUser = {
    email,
    password: hashedPassword,
    name: "No Name",
    status: "No Status",
    profilePicture: "/images/user.png",
  };

  // Save user
  try {
    const user = await User.create(newUser);

    // Create a new chat for the user
    const chat = new Chat({
      participants: [user._id],
      messages: [],
    });
    await chat.save();

    // Generate token with chatId
    const token = generateToken(user._id.toString(), chat._id.toString());
    return res.status(201).json({ message: "Signup successful", token });
  } catch (error) {
    console.error("Error saving user:", error);
    return res.status(500).json({ message: "Error saving user" });
  }
});

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  // Find the user in the database and check the password
  const user = await User.findOne({ email });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Find or create a chat for the user
  let chat = await Chat.findOne({ participants: user._id });
  if (!chat) {
    chat = new Chat({
      participants: [user._id],
      messages: [],
    });
    await chat.save();
  }

  // Generate token with chatId
  const token = generateToken(user._id.toString(), chat._id.toString());

  res.status(200).json({
    message: "Login successful",
    token,
    user: {
      email: user.email,
      name: user.name,
      status: user.status,
    },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
