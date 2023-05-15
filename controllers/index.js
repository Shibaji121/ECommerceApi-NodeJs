const express = require("express");
const Products = require("../models/Product");

module.exports.createProduct = async function (req, res) {
  try {
    console.log(req.body);
    const product = await Products.create(req.body.product);
    res.status(201).json({ data: { product: product } });
  } catch (error) {
    res.status(500).json(error);
  }
};
