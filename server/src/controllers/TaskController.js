import { Op } from "sequelize";
import { Task, Result } from "../models/models.js";

class TaskController {
  async createTask(parent, args) {
    const task = await Task.create(args.data);

    return task;
  }

  async getSubjectTasks(parent, args) {
    let tasks = await Task.findAll({ where: { subjectId: args.subjectId } });
    const extTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i].dataValues;
      const result = await Result.findOne({
        where: { [Op.and]: [{ taskId: task.id }, { userId: args.userId }] },
      });

      extTasks.push({ ...task, result: result && result.value });
    }

    return extTasks;
  }

  async getTaskById(parent, args) {
    let task = await Task.findOne({ where: { id: args.taskId } });
    return task;
  }
}

export default new TaskController();
