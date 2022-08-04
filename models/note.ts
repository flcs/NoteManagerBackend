import mongoose, { Schema, Document } from "mongoose";
import { IBoard } from "./board";
// NOTE
export interface INote extends Document {
  id: String;
  title: String;
  description: String;
  board: IBoard["_id"];
}

const noteSchema: Schema = new Schema({
  id: { type: Schema.Types.ObjectId, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  board: { type: Schema.Types.ObjectId, required: true },
});

export default mongoose.model<INote>("note", noteSchema);
