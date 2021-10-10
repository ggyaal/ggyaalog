import { gql } from "apollo-server";

export default gql`
  type Result {
    ok: Boolean!
    error: String
  }
`;
