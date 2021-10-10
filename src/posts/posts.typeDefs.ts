import { gql } from "apollo-server";

export default gql`
  type Post {
    title: String!
    content: String
    attachments: String
    tag: [Tag]
    views: Int!
    writer: User
    like: Int
    createdAt: String!
    updatedAt: String
  }
`;
