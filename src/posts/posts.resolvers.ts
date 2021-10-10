import client from "../client";
import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Post: {
    like: ({ id }) =>
      client.like.count({
        where: {
          postId: id,
        },
      }),
  },
};

export default resolvers;
