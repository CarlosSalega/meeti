import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "./relations";
import * as schema from "./schemas";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
  relations,
});
