import { DataTypes, Model } from "denodb";
import PostType from "./post_type.ts";

class Post extends Model {
  static table = "posts";
  static timestamps = true;
  static fields = {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  };
  static postType() {
    return this.hasOne(PostType);
  }
}

export default Post;
