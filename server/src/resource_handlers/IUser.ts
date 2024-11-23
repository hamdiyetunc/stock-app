import { User } from "../models/User";

type User = {
  id: string;
  email: string;
  password: string;
};

export interface IUserHandler {
  save(user: Omit<User, "id">): Promise<string>;

  delete(id: string): Promise<void>;

  update(id: string, updateData: Partial<Omit<User, "id">>): Promise<void>;
}

export class UserHandler implements IUserHandler {
  async save(userData: Omit<User, "id">): Promise<string> {
    const user = new User({
      email: userData.email,
      password: userData.password,
    });
    const savedDocument = await user.save();
    return savedDocument.id.toString();
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  update(id: string, updateData: Partial<Omit<User, "id">>): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
