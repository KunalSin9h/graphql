import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import { nanoid } from "nanoid";

export type User = {
  id: string;
  username: String;
};

export type Pet = {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  img: String;
};

export type Dog = {
  legs: number;
  age: number;
  bhow: boolean;
};
export type Cat = {
  legs: number;
  age: number;
  meow: boolean;
};

export type Data = {
  user: User;
  pets: Pet[];
  dogs: Dog[];
  cats: Cat[];
};

export const defaultData: Data = {
  user: { id: nanoid(), username: "kunalsin9h" },
  dogs: [
    {
      legs: 4,
      age: 2,
      bhow: true,
    },
    {
      legs: 4,
      age: 2,
      bhow: true,
    },
  ],
  cats: [
    {
      legs: 4,
      age: 1,
      meow: true,
    },
    {
      legs: 4,
      age: 1,
      meow: true,
    },
  ],
  pets: [
    {
      id: nanoid(),
      name: "A",
      type: "CAT",
      createdAt: "1.0",
      img: "img_1.png",
    },
    {
      id: nanoid(),
      name: "B",
      type: "CAT",
      createdAt: "2.0",
      img: "img_2.png",
    },
    {
      id: nanoid(),
      name: "C",
      type: "CAT",
      createdAt: "3.0",
      img: "img_3.png",
    },
    {
      id: nanoid(),
      name: "D",
      type: "DOG",
      createdAt: "4.0",
      img: "img_4.png",
    },
    {
      id: nanoid(),
      name: "E",
      type: "DOG",
      createdAt: "5.0",
      img: "img_5.png",
    },
  ],
};

const adapter = new JSONFile<Data>("database/db.json");
const db = new Low(adapter, defaultData);

await db.write();

export default db;
