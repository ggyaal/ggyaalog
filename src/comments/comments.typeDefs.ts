import { gql } from "apollo-server-express";

export default gql`
  type Comment {
    writer: User!
    content: String!
    createdAt: String!
    updatedAt: String
  }
`;
