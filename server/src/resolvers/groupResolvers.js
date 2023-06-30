import GroupController from "../controllers/GroupController.js";

const groupResolvers = {
  Query: {
    groups: () => GroupController.getGroups(),
  },
  Mutation: {
    createGroup: (parent, args) => GroupController.createGroup(parent, args),
  },
};

export default groupResolvers;
