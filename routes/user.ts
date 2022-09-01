import express, { Request, Response } from "express";
import { Schema } from "mongoose";
//controllers
import { user as userController } from "../controllers/user";
import { IUser } from "../models/user";

const userModel = require("../models/user");

const userRouter = express.Router();

userRouter.post("/user", async (request: Request, response: Response) => {
  const res = await userController.addUser(request.body);
  response.send(res);
});

userRouter.get("/user", async (request, response) => {
  const res = await userController.getUsers();
  response.send(res);
});

export default userRouter;
