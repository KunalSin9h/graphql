import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";

type User = {
  id: string;
  username: String;
};

type Pet = {
  id: string;
  createdAt: string;
  name: string;
  type: string;
};

export type Data = {
  user: User;
  pets: Pet[];
};

const defaultData: Data = {
  user: { id: "", username: "" },
  pets: [],
};

const adapter = new JSONFile<Data>("database/db.json");
const db = new Low(adapter, defaultData);

export default db;
