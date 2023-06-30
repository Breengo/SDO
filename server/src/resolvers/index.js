import userResolvers from "./userResolvers.js";
import groupResolvers from "./groupResolvers.js";
import subjectResolvers from "./subjectResolvers.js";

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...groupResolvers.Query,
    ...subjectResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...groupResolvers.Mutation,
    ...subjectResolvers.Mutation,
  },
};
export default resolvers;
