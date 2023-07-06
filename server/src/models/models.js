import sequelize from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  login: { type: DataTypes.STRING, unique: true, allowNull: false },
  isStaff: { type: DataTypes.BOOLEAN, allowNull: false },
  group: { type: DataTypes.STRING },
});

const Subject = sequelize.define("subject", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.TEXT },
  groups: { type: DataTypes.TEXT },
});

const Task = sequelize.define("task", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  questions: { type: DataTypes.ARRAY(DataTypes.TEXT) },
});

const Text = sequelize.define("text", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  content: { type: DataTypes.TEXT, allowNull: false },
});

const Result = sequelize.define("result", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  value: { type: DataTypes.INTEGER, allowNull: false },
});

User.hasMany(Subject);
Subject.belongsTo(User);

Subject.hasMany(Task);
Task.belongsTo(Subject);

Subject.hasMany(Text);
Text.belongsTo(Subject);

Task.hasMany(Result);
Result.belongsTo(Task);

User.hasMany(Result);
Result.belongsTo(User);

export { User, Subject, Task, Text, Result };
export default { User, Subject, Task, Text, Result };
