import TaskController from "../controllers/TaskController.js";

const taskResolvers = {
  Mutation: {
    createTask: (parent, args) => TaskController.createTask(parent, args),
    getSubjectTasks: (parent, args) =>
      TaskController.getSubjectTasks(parent, args),
    getTaskById: (parent, args) => TaskController.getTaskById(parent, args),
  },
};

export default taskResolvers;
