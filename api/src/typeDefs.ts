import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: String!
    username: String!
  }

  type Pet {
    id: String!
    createdAt: Int!
    name: String!
    type: String!
  }

  type Query {
    user: User!
    pet: Pet!
  }
`;

export default typeDefs;
