import { gql } from "apollo-server";

export default gql`
  type Comment {
    writer: User!
    content: String!
    createdAt: String!
    updatedAt: String
  }
`;
