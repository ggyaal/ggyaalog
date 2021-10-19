import { Resolvers } from "../types";

const resolvers: Resolvers = {
  Post: {
    tag: ({ id }, _, { client }) =>
      client.tag.findMany({ where: { posts: { some: { id } } } }),
    like: ({ id }, _, { client }) =>
      client.like.count({
        where: {
          postId: id,
        },
      }),
    comments: ({ id }, _, { client }) =>
      client.comment.findMany({ where: { postId: id } }),
  },
};

export default resolvers;
