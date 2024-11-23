import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export interface UserDocument extends Document {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  status: string;
  profilePicture: string;

  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  status: { type: String },
  profilePicture: { type: String },
});

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

export const User: Model<UserDocument> = mongoose.model<UserDocument>(
  "User",
  userSchema,
);
