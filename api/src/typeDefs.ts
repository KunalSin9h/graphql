import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: String!
    createdAt: String!
    name: String!
    type: String!
    img: String!
  }

  type Pet {
    id: String!
    createdAt: String!
    name(up: Boolean): String!
    type: String!
    img: String!
  }
  input PetInput {
    type: String!
  }

  type Query {
    pets(input: PetInput): [Pet]!
  }
`;

export default typeDefs;
