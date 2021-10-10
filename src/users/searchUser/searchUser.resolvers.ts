import client from "../../client";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    searchUser: (_, { username }) =>
      client.user.findUnique({
        where: { username },
      }),
  },
};

export default resolvers;
