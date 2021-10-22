import { protectedResolver } from "../../shared/shared.utils";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    toggleLike: protectedResolver(
      async (_, { postId }, { client, loggedUser }) => {
        const existedLike = await client.like.findFirst({
          where: {
            postId,
            userId: loggedUser.id,
          },
        });

        if (existedLike) {
          const deleteLike = await client.like.delete({
            where: {
              id: existedLike.id,
            },
          });
          if (!deleteLike)
            return { ok: false, error: "종아요 취소를 하지 못했습니다." };
          return { ok: true };
        }

        const like = await client.like.create({
          data: {
            user: { connect: { id: loggedUser.id } },
            post: { connect: { id: postId } },
          },
        });
        if (!like) return { ok: false, error: "좋아요를 하지 못했습니다." };
        return { ok: true };
      }
    ),
  },
};

export default resolvers;
