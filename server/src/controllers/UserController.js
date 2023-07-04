import { User } from "../models/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

class UserController {
  async getUsers() {
    const users = await User.findAll({ order: [["login", "ASC"]] });
    return users;
  }
  async createUser(parent, args) {
    const password = await bcrypt.hash(args.data.password, 6);
    args.data.password = password;
    const user = await User.create(args.data);
    const token = jwt.sign(user.dataValues, process.env.SECRET_KEY);
    return { user: user.dataValues, token };
  }

  async setGroup(parent, args) {
    const user = await User.update(
      { group: args.group },
      { where: { id: args.uid } }
    );
    return `Set group to ${args.group}`;
  }

  async loginUser(parent, args) {
    const user = await User.findOne({ where: { login: args.login } });
    if (!user) {
      return "No such user";
    }
    const correctPass = await bcrypt.compare(
      args.password,
      user.dataValues.password
    );

    if (!correctPass) {
      return "Incorrect password";
    }
    const token = jwt.sign(user.dataValues, process.env.SECRET_KEY);
    return { user: user.dataValues, token };
  }

  async auth(parent, args) {
    const user = jwt.decode(args.token);
    return user;
  }
}

export default new UserController();
