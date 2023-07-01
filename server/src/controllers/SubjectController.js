import { User } from "../models/models.js";
import { Subject } from "../models/models.js";

class SubjectController {
  async getSubjects() {
    const subjects = await Subject.findAll({ include: User });
    const extSubjects = subjects.map((subject) => {
      const userData = subject.user.dataValues;
      return { ...userData, ...subject.dataValues };
    });

    return extSubjects;
  }
  async createSubject(parent, args) {
    const subject = await Subject.create(args.data);
    return subject;
  }
}

export default new SubjectController();
