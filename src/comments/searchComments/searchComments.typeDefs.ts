import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchComments(postId: Int!): [Comment]
  }
`;
