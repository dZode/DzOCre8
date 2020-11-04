const express = require("express");

const app = express();
app.use(express.json());

require("./config/mongoose.config");
const techRoutes = require("./routes/tech.routes");
techRoutes(app);

app.listen(8000, () => console.log("listening now!"));
