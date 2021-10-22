import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    createLike(postId: Int!): Result!
  }
`;
