import express, { Request, Response } from "express";
import { Schema } from "mongoose";

import { user as userController } from "../controllers/user";

const userRouter = express.Router();

userRouter.post("/user", async (request: Request, response: Response) => {
  const res = await userController.createUser(request.body);
  response.send(res);
});

userRouter.get("/user", async (request: Request, response: Response) => {
  const res = await userController.readOneUser(request);
  response.send(res);
});

userRouter.get("/users", async (request: Request, response: Response) => {
  const res = await userController.readAllUsers();
  response.send(res);
});

export default userRouter;
