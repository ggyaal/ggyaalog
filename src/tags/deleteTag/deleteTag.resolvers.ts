import { protectedResolver } from "../../shared/shared.utils";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    deleteTag: protectedResolver(
      async (_, { name }, { client, loggedUser }) => {
        const existedPosts = await client.tag
          .findUnique({ where: { name } })
          .posts();
        if (existedPosts) {
          return {
            ok: false,
            error: "남아있는 포스터를 지우고 다시시도해주세요.",
          };
        }
      }
    ),
  },
};

export default resolvers;
