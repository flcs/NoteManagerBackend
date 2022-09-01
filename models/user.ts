import mongoose, { Schema, Document } from "mongoose";
import { IBoard } from "./board";

export interface IUser extends Document {
  id: String | undefined;
  name: String;
  email: String;
  password: String;
  adminBoards: IBoard["_id"][] | undefined;
  viwerBoards: IBoard["_id"][] | undefined;
}

const userSchema: Schema = new Schema({
  id: { type: Schema.Types.ObjectId, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  adminBoards: { type: Schema.Types.ObjectId, required: false },
  viwerBoards: { type: Schema.Types.ObjectId, required: false },
});

const user = mongoose.model<IUser>("user", userSchema);

module.exports = user;
