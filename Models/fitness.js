const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

     type: {
    type: String,
    trim: true,
    required: "Enter type of fitness routine"
  },
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
  },
  reps: {
    type: Number,
    required: "Enter the number of reps"
  },
  sets: {
    type: Number,
    required: "Enter the number of sets"
  }
});

const fitness = mongoose.model("fitness", workoutSchema);

module.exports = fitness;