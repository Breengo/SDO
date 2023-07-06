import { Result, User } from "../models/models.js";
import { Op } from "sequelize";

class TaskController {
  async createResult(parent, args) {
    const result = await Result.create(args.data);

    return result;
  }

  async getTaskResults(parent, args) {
    let results = await Result.findAll({
      where: { taskId: args.taskId },
      include: User,
    });
    results = results.map((result) => {
      return { ...result.dataValues, user: result.user.dataValues };
    });
    return results;
  }

  async getTaskUserResult(parent, args) {
    let result = await Result.findOne({
      where: { [Op.and]: [{ taskId: args.taskId }, { userId: args.userId }] },
    });
    return result;
  }
}

export default new TaskController();
