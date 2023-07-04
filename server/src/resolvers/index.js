import userResolvers from "./userResolvers.js";
import subjectResolvers from "./subjectResolvers.js";
import textResolvers from "./textResolvers.js";
import taskResolvers from "./taskResolvers.js";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...subjectResolvers.Query,
    ...textResolvers.Query,
    ...taskResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...subjectResolvers.Mutation,
    ...textResolvers.Mutation,
    ...taskResolvers.Mutation,
  },
};
export default resolvers;
