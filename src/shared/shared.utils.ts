import jwt from "jsonwebtoken";
import client from "../client";

export const getAccToken = async (refToken?: string) => {
  if (!refToken) return null;
  const verifiedToken = await jwt.verify(refToken, process.env.REFLASH_SECRET);
  if (typeof verifiedToken !== "string" && "id" in verifiedToken) {
    const accToken = await jwt.sign(
      { id: verifiedToken.id },
      process.env.SECRET_KEY
    );
    return accToken;
  }
  return null;
};

export const getUser = async (token?: string) => {
  if (token) {
    const verifiedToken = await jwt.verify(token, process.env.SECREC_KEY);
    if (typeof verifiedToken !== "string" && "id" in verifiedToken) {
      const user = await client.user.findUnique({
        where: { id: verifiedToken.id },
      });
      if (user) return user;
    }
  }

  return null;
};
