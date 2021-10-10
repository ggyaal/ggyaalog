import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import client from "../../client";
import { Login, Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, { username, password }): Promise<Login> => {
      const existedUser = await client.user.findUnique({ where: { username } });
      if (!existedUser)
        return { ok: false, error: "회원이 존재하지 않습니다." };
      const passwordOk = await bcrypt.compare(password, existedUser.password);
      if (!passwordOk) return { ok: false, error: "비밀번호가 틀렸습니다." };

      const accToken = await jwt.sign(
        { id: existedUser.id },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );

      const refToken = await jwt.sign(
        { id: existedUser.id },
        process.env.REFLASH_SECRET,
        { expiresIn: "2w" }
      );

      return { ok: true, accToken, refToken };
    },
  },
};

export default resolvers;
