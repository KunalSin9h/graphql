import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import { nanoid } from "nanoid";

export type User = {
  id: string;
  username: String;
  pets: string[];
};

export type Pet = {
  id: string;
  createdAt: string;
  name: string;
  type: string;
  img: String;
  user: string;
};

export type Data = {
  users: User[];
  pets: Pet[];
};

let user_1: User = {
  id: nanoid(),
  username: "A",
  pets: [],
};

let pet_1: Pet = {
  id: nanoid(),
  createdAt: Date.now().toString(),
  name: "pA",
  type: "DOG",
  img: "dog.png",
  user: user_1.id,
};

user_1.pets.push(pet_1.id);

export const defaultData: Data = {
  users: [user_1],
  pets: [pet_1],
};

const adapter = new JSONFile<Data>("database/db.json");
const db = new Low(adapter, defaultData);

await db.write();

export default db;
