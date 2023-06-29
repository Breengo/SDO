import { Sequelize } from "sequelize";

export default new Sequelize("SDO", "postgres", "12345", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});
