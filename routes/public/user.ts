import express, { Request, Response } from "express";
import { Schema } from "mongoose";

import { user as userController } from "../../controllers/user";

const userRouter = express.Router();

userRouter.post(
  "/auth/register",
  async (request: Request, response: Response) => {
    await userController.createUser(request, response);
  }
);

userRouter.post("/auth/login", async (request: Request, response: Response) => {
  await userController.login(request, response);
});

export default userRouter;
