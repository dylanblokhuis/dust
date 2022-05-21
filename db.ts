import { Database, SQLite3Connector } from 'https://deno.land/x/denodb@v1.0.40/mod.ts';

const conn = new SQLite3Connector({
  filepath: "./db.sql",
});

const db = new Database(conn);

export default db;