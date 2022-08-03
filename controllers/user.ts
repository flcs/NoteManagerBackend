import { Request, Response } from "express";

const user = (request: Request, response: Response) => {
  response.send("teste");
};

export { user };
