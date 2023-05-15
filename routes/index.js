const express = require("express");
const router = express.Router();

const productsController = require("../controllers/index");

router.route("/create").post(productsController.createProduct);

module.exports = router;
