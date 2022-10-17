import { Model } from "denodb"
import { DataTypes } from "https://deno.land/x/denodb/mod.ts";


export default class User extends Model {
  // Defining user table with a ID field
  static table = 'user';
  static timestamps = true;
  static fields = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement: true,
    },
  };
};