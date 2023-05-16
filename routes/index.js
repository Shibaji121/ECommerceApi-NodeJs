const express = require("express");
const router = express.Router();

const productsController = require("../controllers/index");

router.route("/create").post(productsController.createProduct);
router.route("/").get(productsController.getAllProducts);
router.route("/:id").get(productsController.getProductById);
router.route("/:id").delete(productsController.deleteProduct);

module.exports = router;
