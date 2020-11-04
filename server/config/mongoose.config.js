const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/tech_projects", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
