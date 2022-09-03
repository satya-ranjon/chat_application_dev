const { default: mongoose } = require("mongoose");

const peopleSchema = mongoose.Schema({
  name: { type: String, require: true, trim: true },
});
