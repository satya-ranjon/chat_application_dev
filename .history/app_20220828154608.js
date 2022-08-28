const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express();
dotenv.config();

//? Database connection
mongoose.connect();
