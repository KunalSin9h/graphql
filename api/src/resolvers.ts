import { Low } from "lowdb";
import { Data, type Pet } from "./db";
import { nanoid } from "nanoid";

const resolvers = {
  Query: {
    // @ts-ignore
    animals(_: unknown, { input }, { db }: { db: Low<Data> }) {
      return [...db.data.dogs, ...db.data.cats];
    },
    // @ts-ignore
    pets(_: unknown, { input }, { db }: { db: Low<Data> }) {
      let pets = db.data.pets;
      if (input === undefined) return pets;

      let res = [];

      for (let resLt of pets) {
        if (resLt.type === input.type) {
          res.push(resLt);
        }
      }

      return res;
    },
    // @ts-ignore
    pet(_, { input }, { db }) {
      let pets = db.data.pets;

      if (input === undefined || input === null) {
        throw new Error("Missing id");
      }

      for (let pet of pets) {
        if (pet.id === input.id) {
          return pet;
        }
      }

      throw new Error(`Didn't find pet with id = ${input.id}`);
    },
  },
  Mutation: {
    // @ts-ignore
    addPet(_, { input }, { db }: { db: Low<Data> }) {
      let name = input.name;
      let type = input.type;
      let img = input.img;

      let newPet: Pet = {
        id: nanoid(),
        name,
        type,
        img,
        createdAt: Date.now().toString(),
      };

      db.data.pets.push(newPet);

      db.write();

      return newPet;
    },
    // @ts-ignore
    removePet(_, { input }, { db }: { db: Low<Data> }) {
      let id = input.id;

      let pet: Pet | undefined = undefined;

      db.data.pets = db.data.pets.filter((item) => {
        if (item.id === id) {
          pet = item;
          return false;
        }
        return true;
      });

      db.write();

      if (pet === undefined) {
        throw new Error("Invalid id");
      } else {
        return pet;
      }
    },
    // @ts-ignore
    removeAllPets(_, { input }, { db }: { db: Low<Data> }) {
      let allPets = db.data.pets;
      db.data.pets = [];
      db.write();
      return allPets;
    },
  },

  Animal: {
    // @ts-ignore
    __resolveType(animal) {
      if (animal.meow) return "Cat";
      return "Dog";
    },
  },
};

export default resolvers;
