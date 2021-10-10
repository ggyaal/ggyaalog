import { gql } from "apollo-server";

export default gql`
  type Tag {
    name: String!
    posts: [Post]
    createdAt: String!
    updatedAt: String
  }
`;
