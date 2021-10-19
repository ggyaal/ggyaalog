import { protectedResolver } from "../../shared/shared.utils";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    createComment: protectedResolver(
      async (_, { postId, content }, { client, loggedUser }) => {
        const comment = client.comment.create({
          data: {
            writer: {
              connect: {
                id: loggedUser.id,
              },
            },
            content,
            post: {
              connect: {
                id: postId,
              },
            },
          },
        });
        if (!comment) return { ok: false, error: "댓글달기에 실패하였습니다." };
        return { ok: true, comment };
      }
    ),
  },
};

export default resolvers;
