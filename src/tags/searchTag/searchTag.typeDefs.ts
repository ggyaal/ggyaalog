import { gql } from "apollo-server-express";

export default gql`
  type Query {
    searchTags(name: String!): [Tag]
  }
`;
