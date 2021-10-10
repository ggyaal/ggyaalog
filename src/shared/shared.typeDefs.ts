import { gql } from "apollo-server-express";

export default gql`
  type Result {
    ok: Boolean!
    error: String
  }

  type Login {
    ok: Boolean!
    accToken: String
    refToken: String
    error: String
  }
`;
