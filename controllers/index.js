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
    res.status(201).json({ data: { products: products } });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get product by id
module.exports.getProductById = async function (req, res) {
  try {
    const product = await Products.findById(req.params.id);
    res.status(201).json({ data: { product: product } });
  } catch (error) {
    res.status(500).json(error);
  }
};
