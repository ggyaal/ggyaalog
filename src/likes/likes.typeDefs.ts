import { gql } from "apollo-server";

export default gql`
  type Like {
    post: Post
    user: User
    createdAt: String!
    updatedAt: String
  }
`;
