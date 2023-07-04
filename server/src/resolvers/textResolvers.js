import TextController from "../controllers/TextController.js";

const textResolvers = {
  Mutation: {
    createText: (parent, args) => TextController.createText(parent, args),
    getSubjectTexts: (parent, args) =>
      TextController.getSubjectTexts(parent, args),
    getTextById: (parent, args) => TextController.getTextById(parent, args),
  },
};

export default textResolvers;
