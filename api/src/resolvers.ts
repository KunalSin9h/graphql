import { Low } from "lowdb";
import type { Data } from "./db";

const resolvers = {
  Query: {
    pets(_: unknown, __: unknown, { db }: { db: Low<Data> }) {
      return db.data.pets;
    },
  },
};

export default resolvers;
