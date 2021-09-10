const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter name of fitness routine"
  },
  duration: {
    type: Number,
    required: "Enter duration of workout routine"
  },
  weight: {
    type: Number,
    required: "Enter beginning weight"
  }
});

const fitness = mongoose.model("fitness", workoutSchema);

module.exports = fitness;