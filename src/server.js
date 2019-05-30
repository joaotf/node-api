const express = require("express");
const body = require("body-parser");
const mongoose = require("mongoose");
const connection = require("./connection/database.js");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

require("./models/Structure");

app.use(body.urlencoded({ extended: false }));
app.use(body.json());

app.use("/api", require("./routes/routes.js"));

app.listen(process.env.PORT || 3000);
