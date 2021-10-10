import { PrismaClient } from ".prisma/client";
import { Resolver } from "@apollo/client";

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};

export type Result = {
  ok: boolean;
  error?: string;
};
