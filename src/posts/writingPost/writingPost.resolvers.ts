import { extractTag, protectedResolver } from "../../shared/shared.utils";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    writingPost: protectedResolver(
      async (
        _,
        { title, content, attachments, tag },
        { client, loggedUser, newAccToken }
      ) => {
        let tags = [];
        if (tag) {
          tags = extractTag(tag);
          tags = tags.map((name) => ({ where: { name }, create: { name } }));
        }
        if (attachments) {
          // 파일 관련 처리
        }
        const post = await client.post.create({
          data: {
            title,
            content,
            attachments,
            writer: {
              connect: {
                id: loggedUser.id,
              },
            },
            ...(tags.length > 0 && {
              tag: { connectOrCreate: tags },
            }),
          },
        });
        if (!post) return { ok: false, error: "글이 저장되지 않았습니다." };
        return { ok: true };
      }
    ),
  },
};

export default resolvers;
