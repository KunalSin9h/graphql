import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers";
import db from "./db";
import loadGraphQL from "@kunalsin9h/load-gql";

const typeDefs = loadGraphQL("graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 3033,
  },
  context: async ({ req }) => {
    // use req.headers.authentication to get auth tokens and
    // allow only authenticated users
    return {
      db,
    };
  },
});

console.log(`Started server at ${url}`);
