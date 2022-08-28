const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

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
app.use(express.urlencoded({ extended: true }));

//? Set view engine
app.set("view engine", "ejs");

//? Set static folder
app.use(express.static(path.join(__dirname, "public")));

//? Parse cookis
app.use(cookieParser(process.env.COOKIE_SECRET));

//? Routin setup

//! Error handling

//? App listen
app.listen(process.env.PORT, () => {
  console.log(`Server started on port`);
});
