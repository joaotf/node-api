const express = require("express")
const body = require("body-parser")
const mongoose = require("mongoose")
const connection = require("./connection/database.js")

const app = express();
require("./models/Structure")
app.use(body.urlencoded({extended: false}))
app.use(body.json())

app.use("/api", require("./routes/routes.js"))

app.listen(process.env.PORT || 3000)