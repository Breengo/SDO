import { User } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController {
  async getUsers() {
    const users = await User.findAll();
    return users;
  }
  async createUser(parent, args) {
    console.log(args);
    const password = await bcrypt.hash(args.data.password, 6);
    args.data.password = password;
    const user = await User.create(args.data);
    const token = jwt.sign();
    return user;
  }
}

export default new UserController();
