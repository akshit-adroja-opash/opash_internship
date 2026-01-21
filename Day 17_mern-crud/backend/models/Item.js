const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    hobby: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
