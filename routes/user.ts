const express = require("express");

//controllers
import { user } from "../controllers/user";

const router = express.Router();

router.get("/", user);

export default router;
