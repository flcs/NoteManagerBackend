import express, { Request, Response } from "express";
import { Schema } from "mongoose";

import { board as boardController } from "../../controllers/board";
import { checkToken } from "../../helpers/checkToken";

const boardRouter = express.Router();

boardRouter.post(
  "/board",
  checkToken,
  async (request: Request, response: Response) => {
    const res = await boardController.createBoard(request.body);
    response.send(res);
  }
);

boardRouter.get(
  "/board",
  checkToken,
  async (request: Request, response: Response) => {
    const res = await boardController.readOneBoard(request);
    response.send(res);
  }
);

boardRouter.get(
  "/boards",
  checkToken,
  async (request: Request, response: Response) => {
    const res = await boardController.readAllBoards();
    response.send(res);
  }
);

boardRouter.delete(
  "/board",
  checkToken,
  async (request: Request, response: Response) => {
    const res = await boardController.deleteBoard(request);
    response.send(res);
  }
);

boardRouter.put(
  "/board",
  checkToken,
  async (request: Request, response: Response) => {
    const res = await boardController.updateBoard(request);
    response.send(res);
  }
);

export default boardRouter;
