require("dotenv").config();
import express from "express";
import logger from "morgan";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
import client from "./client";
import { getAccToken, getUser } from "./shared/shared.utils";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  schema,
  introspection: true,
  context: async (ctx) => {
    if (ctx.req) {
      const {
        req: { headers },
      } = ctx;
      let loggedUser = await getUser(headers.acctoken as string);
      let newAccToken;
      if (!loggedUser) {
        newAccToken = await getAccToken(headers.reftoken as string);
        loggedUser = await getUser(newAccToken);
      }
      return {
        client,
        loggedUser,
        newAccToken,
      };
    }
  },
});

const app = express();
// app.use(logger("tiny"));

apollo.start().then(() => apollo.applyMiddleware({ app }));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
