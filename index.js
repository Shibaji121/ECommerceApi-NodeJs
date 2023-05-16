const express = require("express");
const port = process.env.PORT || 8000;

const db = require("./config/mongoose");
const Products = require("./models/Product");
const bodyParser = require("body-parser");

const app = express();

// To parse incoming requests
app.use(express.urlencoded());

// middle ware to parse incoming request bodies
app.use(bodyParser.json());

// use express router
app.use("/products", require("./routes/index"));

// server start
app.listen(port, function (error) {
  if (error) {
    console.log("Error Occured :", error);
  }
  console.log("Express Server Starts on : ", port);
});
