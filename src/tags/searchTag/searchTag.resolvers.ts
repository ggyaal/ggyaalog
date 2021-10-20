import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    searchTags: (_, { name }, { client }) =>
      client.tag.findMany({
        where: { name: { contains: name.toLowerCase() } },
      }),
  },
};

export default resolvers;
