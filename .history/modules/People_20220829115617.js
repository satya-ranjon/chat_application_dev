const { default: mongoose } = require("mongoose");

const peopleSchema = mongoose.Schema({
  name: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true, lowercase: true },
  name: { type: String, require: true, trim: true },
  name: { type: String, require: true, trim: true },
  name: { type: String, require: true, trim: true },
  name: { type: String, require: true, trim: true },
});
