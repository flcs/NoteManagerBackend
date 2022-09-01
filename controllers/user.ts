import { Request, Response } from "express";
import { IUser } from "../models/user";

const userModel = require("../models/user");

const user = {
  addUser: async (newUser: IUser) => {
    const user = new userModel(newUser);
    try {
      console.log(user);
      await user.save();
      return user;
    } catch (error) {
      return error;
    }
  },
  getUsers: async () => {
    try {
      const users = await userModel.find({});
      return users;
    } catch (error) {
      return error;
    }
  },
};

export { user };
