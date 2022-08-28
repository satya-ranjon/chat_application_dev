const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express();
dotenv.config();

//? Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
  })
  .then(() => console.log("--mongoose connection successfully---"))
  .catch((err) => console.log(err));

//? Request parsers
app.use(express.json());
app.use;
