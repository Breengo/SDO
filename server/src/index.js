import { ApolloServer } from "@apollo/server";
import express from "express";
import "dotenv/config.js";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import sequelize from "./db.js";
import models from "./models/models.js";

import typeDefs from "./typeDefs/index.js";
import resolvers from "./resolvers/index.js";

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await server.start();

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/graphql", expressMiddleware(server));

    app.listen(4000, () => {
      console.log(`Server started on ${4000}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
