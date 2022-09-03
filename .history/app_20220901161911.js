//* External import
const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const multer = require("multer");

//* Internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/eorrorHandler");

const inboxRouter = require("./router/inboxRouter");
const usersRouter = require("./router/usersRouter");
const loginRouter = require("./router/loginRouter");

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
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

//! 404 not found Error handling
app.use(notFoundHandler);

//! Common Error handling
app.use(errorHandler);

//? App listen
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
