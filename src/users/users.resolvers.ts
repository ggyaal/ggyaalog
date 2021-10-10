import { Resolvers } from "../types";

const resolvers: Resolvers = {
  User: {
    post: ({ id }, { page }, { client }) =>
      client.user
        .findUnique({ where: { id } })
        .post({ take: 10, skip: (page - 1) * 10 }),
    comment: ({ id }, _, { client }) =>
      client.comment.findMany({
        where: { userId: id },
      }),
    like: ({ id }, _, { client }) =>
      client.post.findMany({ where: { like: { some: { id } } } }),
    isMe: ({ id }, _, { loggedUser }) => id === loggedUser.id,
  },
};

export default resolvers;
