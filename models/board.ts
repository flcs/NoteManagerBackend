import mongoose, { Schema, Document } from "mongoose";
import { INote } from "./note";
import { IUser } from "./user";

export interface IBoard extends Document {
  id: String;
  notes: INote["_id"][] | undefined;
  admin: IUser["_id"];
  viwer: IUser["_id"][] | undefined;
}

const boardSchema: Schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  notes: { type: Schema.Types.ObjectId, required: true },
  admin: { type: Schema.Types.ObjectId, required: true },
  viwer: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<IBoard>("board", boardSchema);
