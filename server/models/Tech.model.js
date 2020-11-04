const mongoose = require("mongoose");

const TechSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please specify a name!"],
    },
    category: {
      type: String,
      required: [true, "Please provide a category for this data!"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description!"],
    },
    image1: {
      type: String,
      required: [
        true,
        "Please provide an image url for the category type or of the project",
      ],
    },
    image2: {
      type: String,
    },
    image3: {
      type: String,
    },
    image4: {
      type: String,
    },
    image5: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tech", TechSchema);
