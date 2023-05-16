const mongoose = require("mongoose");
require("dotenv").config();

//connection to database
mongoose.connect(process.env.DB_CONNECTION_URL);

//this will used as acessing database
mongoose.set("strictQuery", true);
const db = mongoose.connection;

//If error occured
db.on("error", console.error.bind(console, "Error connecting to db"));

//Check Successfully connection
db.once("open", function () {
  console.log("Successfully connected to the database");
});
