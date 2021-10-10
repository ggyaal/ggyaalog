import client from "../client";
import { Resolvers } from "../types";

const resolvers: Resolvers = {
  User: {
    isMe: ({ id }) => false,
  },
};
