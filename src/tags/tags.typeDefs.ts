import { gql } from "apollo-server-express";

export default gql`
  type Tag {
    name: String!
    posts: [Post]
    createdAt: String!
    updatedAt: String
  }
`;
