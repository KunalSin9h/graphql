import gql from "graphql-tag";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  interface Animal {
    legs: Int!
    age: Int!
  }

  type Dog implements Animal {
    legs: Int!
    age: Int!
    bhow: Boolean!
  }

  type Cat implements Animal {
    legs: Int!
    age: Int!
    meow: Boolean!
  }

  enum PetTypes {
    DOG
    CAT
  }

  type Pet {
    id: String!
    createdAt: String!
    name(up: Boolean): String!
    type: PetTypes!
    img: String!
  }

  input PetsInput {
    type: PetTypes!
  }

  input SinglePetInput {
    id: String!
  }

  input AddPetInput {
    name: String!
    type: PetTypes!
    img: String!
  }

  input RemovePetInput {
    id: String!
  }

  type Query {
    animals: [Animal]!
    pets(input: PetsInput): [Pet]!
    pet(input: SinglePetInput): Pet!
  }

  type Mutation {
    addPet(input: AddPetInput!): Pet!
    removePet(input: RemovePetInput!): Pet!
    removeAllPets: [Pet]!
  }
`;

export default typeDefs;
