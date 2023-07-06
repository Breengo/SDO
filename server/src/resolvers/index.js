import userResolvers from "./userResolvers.js";
import subjectResolvers from "./subjectResolvers.js";
import textResolvers from "./textResolvers.js";
import taskResolvers from "./taskResolvers.js";
import resultResolvers from "./resultResolvers.js";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...subjectResolvers.Query,
    ...textResolvers.Query,
    ...taskResolvers.Query,
    ...resultResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...subjectResolvers.Mutation,
    ...textResolvers.Mutation,
    ...taskResolvers.Mutation,
    ...resultResolvers.Mutation,
  },
};
export default resolvers;
