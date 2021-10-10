import { gql } from "apollo-server-express";

export default gql`
  type Like {
    post: Post
    user: User
    createdAt: String!
    updatedAt: String
  }
`;
