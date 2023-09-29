import { Low } from "lowdb";
import type { Data, Pet } from "./db";

const resolvers = {
  Query: {
    // @ts-ignore
    pets(_: unknown, { input }, { db }: { db: Low<Data> }) {
      let response = [
        { id: "1", firstName: "Hello", lastName: "World", type: "cat" },
        { id: "2", firstName: "ello", lastName: "orld", type: "dog" },
        { id: "3", firstName: "llo", lastName: "rld", type: "cat" },
        { id: "4", firstName: "lo", lastName: "ld", type: "dog" },
      ];

      if (input === undefined) return response;

      let res = [];

      for (let resLt of response) {
        if (resLt.type === input.type) {
          res.push(resLt);
        }
      }

      return res;
    },
  },
  Pet: {
    name(pet: unknown, { up }: { up: boolean }) {
      // @ts-ignore
      let name = (pet.firstName + pet.lastName) as string;
      if (up === true) {
        name = name.toUpperCase();
      }
      return name;
    },
  },
};

export default resolvers;
