import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    searchComments: (_, { postId }, { client }) =>
      client.comment.findMany({ where: { postId } }),
  },
};

export default resolvers;
