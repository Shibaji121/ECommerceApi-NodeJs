const express = require("express");
const port = 8000;

const db = require("./config/mongoose");

const app = express();

app.listen(port, function (error) {
  if (error) {
    console.log("Error Occured :", error);
  }
  console.log("Express Server Starts on : ", port);
});
