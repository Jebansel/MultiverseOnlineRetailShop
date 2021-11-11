const express = require("express");
const Router = express.Router();
const fetch = require("node-fetch");
const config = require("../../config");
const url = `${config.url.products}`; // http://localhost:3010/api/products

Router.post("/", async (req, res, next) => {
  try {
    await fetch(url, {
      method: "post",
      body: JSON.stringify(req.body),
      headers: { "Content-Type": "application/json" },
    });
    res.redirect("/products");
  } catch (error) {
    return next(error);
  }
})
  .get("/", async (req, res, next) => {
    try {
      const response = await fetch(url);
      const products = await response.json();
      res.render("products", { products });
    } catch (error) {
      return next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const response = await fetch(url + "/" + req.params.id);
      const product = await response.json();
      res.render("product", { product });
    } catch (error) {
      return next(error);
    }
  })
  .get("/category/:categoryId", async (req, res, next) => {
    try {
      const response = await fetch(
        url + "/category" + "/" + req.params.categoryId
      );
      const products = await response.json();
      res.render("products", { products });
    } catch (error) {
      return next(error);
    }
  });

module.exports = Router;
