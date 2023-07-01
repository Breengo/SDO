import UserController from "../controllers/UserController.js";

const userResolvers = {
  Query: {
    users: () => UserController.getUsers(),
  },
  Mutation: {
    createUser: (parent, args) => UserController.createUser(parent, args),
    login: (parent, args) => UserController.loginUser(parent, args),
    check: (parent, args) => UserController.auth(parent, args),
  },
};

export default userResolvers;
