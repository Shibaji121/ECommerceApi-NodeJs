const express = require("express");
const Products = require("../models/Product");

// create product
module.exports.createProduct = async function (req, res) {
  try {
    console.log(req.body);
    const product = await Products.create(req.body.product);
    res.status(201).json({ data: { product: product } });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all products
module.exports.getAllProducts = async function (req, res) {
  try {
    const products = await Products.find();
    res.status(200).json({ data: { products: products } });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get product by id
module.exports.getProductById = async function (req, res) {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json({ data: { product: product } });
  } catch (error) {
    res.status(500).json(error);
  }
};

// delete product by id
module.exports.deleteProduct = async function (req, res) {
  try {
    const product = await Products.findById(req.params.id);
    if (product === null) {
      res.status(500).json({ data: { message: "Product Not Found" } });
    } else {
      product.deleteOne();
      res
        .status(200)
        .json({ data: { message: "Product Deleted Successfully" } });
    }
  } catch (error) {
    res.status(400).json({
      data: { message: `Error in Deleting Product:reason: ${error}` },
    });
  }
};

// update quantity of product
module.exports.updateQuantity = async function (req, res) {
  try {
    const product = await Products.findById(req.params.id);
    if (product === null) {
      res.status(500).json({ data: { message: "Product Not Found" } });
    } else {
      const quantity = req.query.quantity;

      if (!quantity) {
        res.status(500).json({
          data: { message: "Quantity Value is required" },
        });
        return;
      }

      const updatedQuant = product.quantity + +quantity;
      if (updatedQuant < 0) {
        res.status(400).json({
          data: { message: "Total Quantity Can not be less than zero" },
        });
        return;
      }

      const updatedProduct = await Products.findByIdAndUpdate(
        req.params.id,
        {
          quantity: updatedQuant,
        },
        {
          new: true,
        }
      );
      res.status(200).json({
        data: { product: updatedProduct, message: "Updated Successfully" },
      });
    }
  } catch (error) {
    res
      .status(400)
      .json({ data: { message: `Error in Updating Quantity: ${error}` } });
  }
};
