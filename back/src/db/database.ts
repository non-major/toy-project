import { Pool } from "pg";
import { config } from "../config";

export const pg = new Pool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
});
