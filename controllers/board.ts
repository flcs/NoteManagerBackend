import { Request, Response } from "express";
import { IBoard } from "../models/board";

const boardModel = require("../models/board");

const board = {
  createBoard: async (newBoard: IBoard) => {
    console.log(newBoard);
    const board = new boardModel(newBoard);
    try {
      await board.save();
      return board;
    } catch (error) {
      return error;
    }
  },
  readOneBoard: async (req: Request) => {
    try {
      const board = await boardModel.findById({ _id: req.body.id });
      return board;
    } catch (error) {
      return error;
    }
  },
  readAllBoards: async () => {
    try {
      const board = await boardModel.find({});
      return board;
    } catch (error) {
      return error;
    }
  },
  deleteBoard: async (req: Request) => {
    try {
      const board = await boardModel.findByIdAndRemove({ _id: req.body._id });
      return board;
    } catch (error) {
      return error;
    }
  },
  updateBoard: async (req: Request) => {
    try {
      console.log(req.body);
      const board = await boardModel.findOneAndUpdate({ _id: req.body._id });
      return board;
    } catch (error) {
      return error;
    }
  },
};

export { board };
