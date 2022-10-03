import { Request, Response } from "express";
import { IUser } from "../models/user";


const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user");

const user = {

  index: async (request: Request, response: Response) => {
    const { email } = request.headers;
    // console.log(name, email, password);

    // check if user exists
    const userExists = await userModel.find({});

    if (userExists) {
      return response
        .status(200)
        .json(userExists);
    }
    return response.status(404);
  },

  getUser: async (request: Request, response: Response) => {
    const { email } = request.headers;
    // console.log(name, email, password);

    // check if user exists
    const userExists = await userModel.findOne({ email: email });

    if (userExists) {
      return response
        .status(200)
        .json(userExists);
    }
    return response.status(404);
  },

  createUser: async (request: Request, response: Response) => {
    const { name, email, password } = request.body;
    // console.log(name, email, password);

    // check if user exists
    const userExists = await userModel.findOne({ email: email });

    if (userExists) {
      return response
        .status(422)
        .json({ msg: "Por favor, utilize outro e-mail!" });
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // create user
    const newUser = new userModel({
      name,
      email,
      passwordHash,
    });

    try {
      await newUser.save();

      response.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (error) {
      response.status(500).json({ msg: error });
    }
  },

  login: async (request: Request, response: Response) => {
    const { email, password } = request.body;

    // debug email
    console.log("email:	", email);
    // 
    // debug password
    console.log("password:	", password);
    // 

    // validations
    if (!email) {
      return response.status(422).json({ msg: "O email é obrigatório!" });
    }

    if (!password) {
      return response.status(422).json({ msg: "A senha é obrigatória!" });
    }

    // check if user exists
    const user = await userModel.findOne({ email: email });

    if (!user) {
      // debug user
      console.log("user:	", user);
      // 
      return response.status(404).json({ msg: "Usuário não encontrado!" });
    }
    // debug ok
    console.log("ok:	encontrou");
    // 

    // check if password match
    const checkPassword = await bcrypt.compare(password, user.passwordHash);
    // debug password
    console.log("password:	", password);
    // 
    // debug checkPassword
    console.log("checkPassword:	", checkPassword);
    // 
    // debug user.passwordHa
    console.log("user.passwordHash:	", user.passwordHash);
    // 

    if (!checkPassword) {
      return response.status(422).json({ msg: "Senha inválida" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      response.status(200).json({
        msg: "Autenticação realizada com sucesso!",
        token,
        user: {
          _id: user._id,
          name: user.name,
        },
      });
    } catch (error) {
      response.status(500).json({ msg: error });
    }
  },
};

export { user };
