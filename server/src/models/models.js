import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  isStaff: { type: DataTypes.BOOLEAN },
});

const Group = sequelize.define("group", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
});

const Subject = sequelize.define("subject", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  description: { type: DataTypes.STRING },
});

const Task = sequelize.define("task", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
});

const Question = sequelize.define("question", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.STRING },
  options: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
  rightAnswer: { type: DataTypes.INTEGER },
});

const Text = sequelize.define("text", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

const Result = sequelize.define("result", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.INTEGER },
});

Group.hasMany(User);
User.belongsTo(Group);

User.hasMany(Subject);
Subject.belongsTo(User);

Subject.hasMany(Task);
Task.belongsTo(Subject);

Task.hasMany(Question);
Question.belongsTo(Task);

Subject.hasMany(Text);
Text.belongsTo(Subject);

Subject.hasMany(Result);
Result.belongsTo(Subject);

User.hasMany(Result);
Result.belongsTo(User);

export { User, Group, Subject, Task, Question, Text, Result };
export default { User, Group, Subject, Task, Question, Text, Result };
