const express = require("express");
const cors = require("cors");
const register = require("./router/register");
const app = express();
const mongoose = require("mongoose");
const cookieParser  = require('cookie-parser')
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials : true
  })
);
app.use(cookieParser())
app.use("/", register);

mongoose
  .connect("mongodb://localhost:27017/jobEntry")
  .then(() => {
    app.listen(4000, () => {
      console.log("server Start");
    });
  })
  .catch((err) => {
    console.error(err);
  });
