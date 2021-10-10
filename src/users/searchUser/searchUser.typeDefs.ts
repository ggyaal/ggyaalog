import { gql } from "apollo-server";

export default gql`
  type Query {
    searchUser(username: String!): User
  }
`;
