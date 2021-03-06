import { gql } from "apollo-server-express";

export default gql`
  type Post {
    title: String!
    content: String
    attachments: String
    tag: [Tag]
    views: Int!
    writer: User
    like: Int
    comments: [Comment]
    createdAt: String!
    updatedAt: String
  }
`;
