import { DataTypes, Model } from "denodb";
import Post from "./post.ts";

class PostType extends Model {
  static table = "post_types";
  static timestamps = true;
  static fields = {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    path: DataTypes.STRING,
  };
  static posts() {
    return this.hasMany(Post);
  }
}

export default PostType;
