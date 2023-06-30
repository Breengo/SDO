import SubjectController from "../controllers/SubjectController.js";

const subjectResolvers = {
  Query: {
    subjects: () => SubjectController.getSubjects(),
  },
  Mutation: {
    createSubject: (parent, args) =>
      SubjectController.createSubject(parent, args),
  },
};

export default subjectResolvers;
