const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const recordRoutes = require("./routes/router");

app.use(bodyParser.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.use("/api", recordRoutes);

app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
