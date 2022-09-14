import { Request, Response } from "express";
import { IBoard } from "../models/board";

const noteModel = require("../models/board");

const note = {
  createBoard: async (newNote: IBoard) => {
    console.log(newNote);
    const note = new noteModel(newNote);
    try {
      await note.save();
      return note;
    } catch (error) {
      return error;
    }
  },
  readOneBoard: async (req: Request) => {
    try {
      const note = await noteModel.findById({ _id: req.body.id });
      return note;
    } catch (error) {
      return error;
    }
  },
  readAllBoards: async () => {
    try {
      const note = await noteModel.find({});
      return note;
    } catch (error) {
      return error;
    }
  },
  deleteBoard: async (req: Request) => {
    try {
      const note = await noteModel.findByIdAndRemove({ _id: req.body._id });
      return note;
    } catch (error) {
      return error;
    }
  },
  updateBoard: async (req: Request) => {
    try {
      console.log(req.body);
      const note = await noteModel.findOneAndUpdate({ _id: req.body._id });
      return note;
    } catch (error) {
      return error;
    }
  },
};

export { note };
