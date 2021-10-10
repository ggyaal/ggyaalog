import { gql } from "apollo-server";

export default gql`
  type Mutation {
    createUser(
      name: String!
      username: String!
      password: String!
      email: String
      socialId: String
      avator: String
    ): Result!
  }
`;
