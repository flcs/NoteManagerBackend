import { Request, Response } from "express";
import { IUser } from "../models/user";

const userModel = require("../models/user");

const user = {
  createUser: async (newUser: IUser) => {
    const user = new userModel(newUser);
    try {
      await user.save();
      return user;
    } catch (error) {
      return error;
    }
  },
  readOneUser: async (req: Request) => {
    try {
      console.log(req.body._id);
      const user = await userModel.findById({ _id: req.body._id });
      return user;
    } catch (error) {
      return error;
    }
  },
  readAllUsers: async () => {
    try {
      const users = await userModel.find({});
      return users;
    } catch (error) {
      return error;
    }
  },
};

export { user };
