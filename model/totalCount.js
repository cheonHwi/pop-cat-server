const { Schema, model } = require("mongoose");

const countSchema = new Schema({
  count: { type: Number, default: 0 },
});

exports.countModel = model("Count", countSchema);
