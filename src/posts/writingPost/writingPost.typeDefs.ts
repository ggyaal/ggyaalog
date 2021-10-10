import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    writingPost(
      title: String!
      content: String
      attachments: String
      tag: String
    ): Result!
  }
`;
//attachments -> 첨부파일임, 추 후 file 객체로 변환
