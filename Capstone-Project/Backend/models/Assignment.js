const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    courseName: {
      type: String
    },

    totalMarks: {
      type: Number,
      default: 100
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Assignment",
  assignmentSchema
);