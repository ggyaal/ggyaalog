import * as bcrypt from "bcrypt";
import client from "../../client";
import { Resolvers, Result } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    createUser: async (
      _,
      { name, username, password, email, socialId, avator }
    ): Promise<Result> => {
      let existedUser = await client.user.findUnique({ where: { username } });
      if (existedUser) return { ok: false, error: "이미 있는 별명입니다." };

      if (email) {
        existedUser = await client.user.findFirst({ where: { email } });
      } else if (socialId) {
        existedUser = await client.user.findFirst({ where: { socialId } });
      }
      if (existedUser) return { ok: false, error: "이미 아이디가 존재합니다." };

      const hashingPassword = await bcrypt.hash(password, 10);
      const createdUser = await client.user.create({
        data: {
          name,
          username,
          password: hashingPassword,
          email,
          socialId,
          avator,
        },
      });
      if (createdUser.id) {
        return { ok: true };
      } else {
        return { ok: false, error: "회원을 만들 수 없습니다." };
      }
    },
  },
};

export default resolvers;
