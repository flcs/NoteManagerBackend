import express, { Request, Response } from "express";
import { Schema } from "mongoose";

import { note as noteController } from "../controllers/note";

const boardRouter = express.Router();

boardRouter.post("/note", async (request: Request, response: Response) => {
  const res = await noteController.createBoard(request.body);
  response.send(res);
});

boardRouter.get("/note", async (request: Request, response: Response) => {
  const res = await noteController.readOneBoard(request);
  response.send(res);
});

boardRouter.get("/notes", async (request: Request, response: Response) => {
  const res = await noteController.readAllBoards();
  response.send(res);
});

boardRouter.delete("/note", async (request: Request, response: Response) => {
  const res = await noteController.deleteBoard(request);
  response.send(res);
});

boardRouter.put("/note", async (request: Request, response: Response) => {
  const res = await noteController.updateBoard(request);
  response.send(res);
});

export default boardRouter;
