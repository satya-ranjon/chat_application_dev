const { default: mongoose, model } = require("mongoose");

const peopleSchema = mongoose.Schema(
  {
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true, lowercase: true },
    mobile: { type: String, require: true },
    password: { type: String, require: true },
    avatar: { type: String },
    name: { type: String, enum: ["admin", "user"], default: "user" },
  },
  { timestamps: true }
);

const people = new peopleSchema();

const People = module("People", peopleSchema);
module.exports = peopleSchema;
