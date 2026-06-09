const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    trainerName: {
      type: String
    },

    duration: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Course", courseSchema);