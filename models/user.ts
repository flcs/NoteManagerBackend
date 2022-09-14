import mongoose, { Schema, Document } from "mongoose";
import { IBoard } from "./board";

export interface IUser extends Document {
  _id?: Schema.Types.ObjectId;
  name: String;
  email: String;
  password: String;
  adminBoards?: IBoard["_id"][];
  viwerBoards?: IBoard["_id"][];
}

const userSchema: Schema = new Schema(
  {
    // _id: { type: Schema.Types.ObjectId, unique: true, auto: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    adminBoards: [
      { type: Schema.Types.ObjectId, ref: "board", required: false },
    ],
    viwerBoards: [
      { type: Schema.Types.ObjectId, ref: "board", required: false },
    ],
  },
  { timestamps: true }
);

const user = mongoose.model<IUser>("user", userSchema);

module.exports = user;
