require("dotenv").config();
const express = require("express");
const app = express();

//routes
import user from "../routes/user";

app.use(user);

app.listen(3001, () => {
  console.log("Alive on:", 3001);
});
