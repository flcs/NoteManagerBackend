import express, { Request, Response } from "express";
import { Schema } from "mongoose";

import { board as boardController } from "../../controllers/board";
import { checkBoardBody } from "../../validations/board";
import { checkToken } from "../../validations/checkToken";

const boardRouter = express.Router();

boardRouter.post(
  "/board",
  checkToken,
  checkBoardBody.adminId,
  async (request: Request, response: Response) => {
    await boardController.createBoard(request, response);
  }
);

boardRouter.get(
  "/board",
  checkToken,
  checkBoardBody.boardId,
  async (request: Request, response: Response) => {
    await boardController.readOneBoard(request, response);
  }
);

boardRouter.get(
  "/boards",
  checkToken,
  checkBoardBody.adminId,
  async (request: Request, response: Response) => {
    await boardController.readAllBoards(request, response);
  }
);

boardRouter.delete(
  "/board",
  checkToken,
  checkBoardBody.boardId,
  async (request: Request, response: Response) => {
    const res = await boardController.deleteBoard(request, response);
    response.send(res);
  }
);

boardRouter.put(
  "/board/addviwer",
  checkToken,
  checkBoardBody.addViwer,
  async (request: Request, response: Response) => {
    const res = await boardController.addViwer(request, response);
    response.send(res);
  }
);

export default boardRouter;
