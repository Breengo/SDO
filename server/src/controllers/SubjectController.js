import { User } from "../models/models.js";
import { Subject } from "../models/models.js";

class SubjectController {
  async getSubjects() {
    const subjects = await Subject.findAll({
      include: User,
      order: [["title", "ASC"]],
    });
    const extSubjects = subjects.map((subject) => {
      const userData = subject.user.dataValues;
      return { ...userData, ...subject.dataValues };
    });

    return extSubjects;
  }

  async getSubjectById(parent, args) {
    const subject = await Subject.findOne({
      where: { id: args.id },
      include: User,
    });
    const userData = subject.user.dataValues;
    const extSubject = { ...userData, ...subject.dataValues };

    return extSubject;
  }

  async createSubject(parent, args) {
    const subject = await Subject.create(args.data);
    return subject;
  }
}

export default new SubjectController();
