import { Subject } from "../models/models.js";

class SubjectController {
  async getSubjects() {
    const subjects = await Subject.findAll();
    return subjects;
  }
  async createSubject(parent, args) {
    const subject = await Subject.create(args.data);
    return subject;
  }
}

export default new SubjectController();
