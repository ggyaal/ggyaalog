require("dotenv").config();
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import schema from "./schema";
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
      let loggedUser = await getUser(headers.accToken as string);
      let newAccToken;
      if (!loggedUser) {
        newAccToken = await getAccToken(headers.refToken as string);
        loggedUser = await getUser(newAccToken);
      }
      return {
        loggedUser,
        newAccToken,
      };
    }
  },
});

const app = express();
app.use(logger("tiny"));

apollo.start().then(() => apollo.applyMiddleware({ app }));

app.listen({ port: PORT }, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
