import { protectedResolver } from "../../shared/shared.utils";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    createLike: protectedResolver(
      async (_, { postId }, { client, loggedUser }) => {
        const like = await client.like.create({
          data: {
            user: { connect: { id: loggedUser.id } },
            post: { connect: { id: postId } },
          },
        });
        if (!like) return { ok: false, error: "제대로 실행되지 않았습니다." };
        return { ok: true };
      }
    ),
  },
};

export default resolvers;
