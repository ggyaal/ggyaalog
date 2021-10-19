import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Comment: {
    writer: ({ id }, _, { client }) =>
      client.user.findFirst({ where: { comment: { some: { id } } } }),
    post: ({ id }, _, { client }) =>
      client.post.findFirst({ where: { comments: { some: { id } } } }),
  },
};

export default resolvers;
