const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv/config");

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postRoute = require("./routes/post");

app.use("/post", postRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("first project");
});

//Connect to DB
mongoose.connect(
  process.env.DB_connect,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("CONNECTED TO DB")
);

//Server Connect
app.listen(3100, function () {
  console.log("Server Connected");
});
