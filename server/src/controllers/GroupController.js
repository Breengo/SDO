import { Group } from "../models/models.js";

class GroupController {
  async getGroups() {
    const groups = await Group.findAll();
    return groups;
  }
  async createGroup(parent, args) {
    const group = await Group.create({ title: args.title });
    return group;
  }
}

export default new GroupController();
