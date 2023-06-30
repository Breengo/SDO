import UserController from "../controllers/UserController.js";

const userResolvers = {
  Query: {
    users: () => UserController.getUsers(),
  },
  Mutation: {
    createUser: (parent, args) => UserController.createUser(parent, args),
  },
};

export default userResolvers;
