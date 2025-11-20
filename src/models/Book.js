const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      minlength: 2,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Book", bookSchema);
