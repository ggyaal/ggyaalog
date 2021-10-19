import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    writer: User!
    content: String!
    post: Post!
    createdAt: String!
    updatedAt: String
  }
`;
