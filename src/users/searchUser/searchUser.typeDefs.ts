import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchUser(username: String!): User
  }
`;
