import { Task } from "../models/models.js";

class TaskController {
  async createTask(parent, args) {
    const task = await Task.create(args.data);

    return task;
  }

  async getSubjectTasks(parent, args) {
    let tasks = await Task.findAll({ where: { subjectId: args.subjectId } });
    return tasks;
  }

  async getTaskById(parent, args) {
    let task = await Task.findOne({ where: { id: args.taskId } });
    return task;
  }
}

export default new TaskController();
