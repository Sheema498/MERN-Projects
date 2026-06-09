const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true
    },

    role: {
      type: String,
      required: true
    },

    package: {
      type: String
    },

    location: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Job",
  jobSchema
);