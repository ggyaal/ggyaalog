import { PrismaClient, User } from ".prisma/client";
import { FragmentMap } from "@apollo/client/utilities";
import { FieldNode } from "graphql";

type Context = {
  client: PrismaClient;
  loggedUser?: User;
  newAccToken?: string;
};

export type Resolver = (
  root: any,
  args?: any,
  context?: Context,
  info?: {
    field: FieldNode;
    fragmentMap: FragmentMap;
  }
) => any;

export type Resolvers = {
  [key: string]: {
    [key: string]: Resolver;
  };
};

export type Result = {
  ok: boolean;
  error?: string;
};

export type Login = {
  ok: boolean;
  accToken?: string;
  refToken?: string;
  error?: string;
};
