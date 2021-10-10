import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    name: String!
    username: String!
    email: String
    socialId: String
    avator: String
    post: [Post]
    comment: [Comment]
    like: [Like]
    createdAt: String!
    updatedAt: String!

    isMe: Boolean!
  }
`;
