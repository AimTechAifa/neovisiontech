import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

type Database = PostgresJsDatabase<typeof schema>;

let database: Database | null = null;
let client: ReturnType<typeof postgres> | null = null;

export function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!database) {
    client = postgres(url, { max: 1, prepare: false });
    database = drizzle(client, { schema });
  }
  return database;
}

export async function closeDb() {
  if (client) {
    await client.end();
    client = null;
    database = null;
  }
}
