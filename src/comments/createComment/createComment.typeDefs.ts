import { gql } from "apollo-server-express";

export default gql`
  type Sended {
    ok: Boolean!
    comment: Comment
    error: String
  }

  type Mutation {
    createComment(postId: Int!, content: String!): Sended!
  }
`;
