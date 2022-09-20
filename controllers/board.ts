import { Request, Response } from "express";
import { IBoard } from "../models/board";
import { IUser } from "../models/user";

const boardModel = require("../models/board");

const board = {
  createBoard: async (request: Request, response: Response) => {
    try {
      const admin = request.body.admin;

      const board = new boardModel(admin);
      const newBoard = await board.save();
      response
        .status(201)
        .json({ msg: "Quadro criado com sucesso!", newBoard });

      return board;
    } catch (error) {
      response.status(500).json({ msg: "Falha ao criar!", error });
    }
  },

  readOneBoard: async (request: Request, response: Response) => {
    try {
      const _id = request.body._id;
      const board = await boardModel.findById({ _id });
      response
        .status(201)
        .json({ msg: "Quadro encontrado com sucesso!", board });
    } catch (error) {
      response.status(500).json({ msg: "Falha na procura!", error });
    }
  },
  readAllBoards: async (request: Request, response: Response) => {
    try {
      const { admin } = request.body;
      const boards = await boardModel.find({ admin });
      response
        .status(201)
        .json({ msg: "Quadros encontrados com sucesso!", boards });
    } catch (error) {
      response.status(500).json({ msg: "Falha na procura!", error });
    }
  },

  deleteBoard: async (request: Request, response: Response) => {
    try {
      const _id = request.body._id;
      const board = await boardModel.findByIdAndRemove({ _id });
      response.status(201).json({ msg: "Quadro excluído com sucesso!", board });
    } catch (error) {
      response.status(500).json({ msg: "Falha ao excluir!", error });
    }
  },

  // PAREI AQUI, CONTINUAR IMPLEMENTAÇÃO DE ADICIONAR VISUALIZADOR AO QUADRO: primeiramente verificar sua existencia e depois
  //utilizar o $push como visto:
  // https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
  addViwer: async (request: Request, response: Response) => {
    try {
      const { _id, viwer } = request.body;
      console.log(_id, viwer);

      //update board
      const updatedViwerArray = oldBoard.viwer;
      const board = await boardModel.findOneAndUpdate(
        { _id },
        { viwer: updatedViwerArray },
        {
          new: true,
        }
      );

      //update user
      const userModel = require("../models/board");
      const oldUser: IUser = await userModel.findById({ _id: viwer });
      console.log(oldUser);
      oldUser.viwerBoards?.push(viwer);
      const updatedViwerBoardsArray = oldUser.viwerBoards;
      const user = await userModel.findOneAndUpdate(
        { _id: viwer },
        { viwerBoards: updatedViwerBoardsArray },
        {
          new: true,
        }
      );

      response
        .status(201)
        .json({ msg: "Visualizador adicionado com sucesso!", board });
    } catch (error) {
      response.status(500).json({ msg: "Falha ao adicionar!", error });
    }
  },
};

export { board };
