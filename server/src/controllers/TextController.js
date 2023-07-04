import { Text } from "../models/models.js";

class TextController {
  async createText(parent, args) {
    const text = await Text.create(args.data);

    return text;
  }

  async getSubjectTexts(parent, args) {
    let texts = await Text.findAll({ where: { subjectId: args.subjectId } });
    return texts;
  }

  async getTextById(parent, args) {
    let text = await Text.findOne({ where: { id: args.textId } });
    return text;
  }
}

export default new TextController();
