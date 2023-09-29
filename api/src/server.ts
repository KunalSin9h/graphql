import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

/**
 * We can set an initial value here
 *
 * That initial value will be the first argument of all top-level
 * resolvers
 */
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 3033,
  },
});

console.log(`Started server at ${url}`);
