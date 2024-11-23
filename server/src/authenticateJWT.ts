import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  id: string; // Expected fields from JWT
  chatId: string;
  messageId: string;
}

export interface CustomRequest extends Request {
  user?: CustomJwtPayload; // CustomJwtPayload extended as JWT payload
}

const authenticateJWT = (
  req: CustomRequest,
  res: Response,
  next: NextFunction,
) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Received Token:", token); // Check Token

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret_key",
      (err, user) => {
        if (err) {
          console.error("Token verification error:", err); // Check error output
          return res.sendStatus(403); // Invalid token
        }

        // Check user authentication
        if (user && typeof user !== "string") {
          req.user = user as CustomJwtPayload; // Adding the user to req.user
          next();
        } else {
          console.error("Invalid user payload");
          return res.sendStatus(403); // Invalid user
        }
      },
    );
  } else {
    console.log("No token provided"); // If token is not present, give message
    res.sendStatus(401); // Token is not present
  }
};

export default authenticateJWT;
