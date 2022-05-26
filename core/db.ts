import { Database, Relationships, SQLite3Connector } from "denodb";
import { Post, PostType } from "./models/mod.ts";

const conn = new SQLite3Connector({
  filepath: "./db.sql",
});

const db = new Database(conn);

export async function sync() {
  // a post has one post type
  // a post type has many posts
  Relationships.belongsTo(Post, PostType);
  // Relationships.belongsTo(PostType, Post);
  db.link([Post, PostType]);

  await db.sync();
}
