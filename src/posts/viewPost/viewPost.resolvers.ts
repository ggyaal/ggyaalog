import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    viewPost: (_, { id }, { client }) =>
      client.post.findUnique({ where: { id } }),
  },
};

export default resolvers;
