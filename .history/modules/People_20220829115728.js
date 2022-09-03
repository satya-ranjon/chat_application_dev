const { default: mongoose } = require("mongoose");

const peopleSchema = mongoose.Schema({
  name: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true, lowercase: true },
  mobile: { type: String, require: true },
  password: { type: String, require: true },
  avatar: { type: String },
  name: { type: String, enum: ["admin", "user"] },
});
