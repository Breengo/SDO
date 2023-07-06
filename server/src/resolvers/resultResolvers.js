import ResultController from "../controllers/ResultController.js";

const resultResolvers = {
  Mutation: {
    createResult: (parent, args) => ResultController.createResult(parent, args),
    getTaskResults: (parent, args) =>
      ResultController.getTaskResults(parent, args),
    getTaskUserResult: (parent, args) =>
      ResultController.getTaskUserResult(parent, args),
  },
};

export default resultResolvers;
