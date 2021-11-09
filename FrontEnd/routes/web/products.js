const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.products}`; // http://localhost:3010/api/products

Router

.post('/', async (req, res, next) => {
  try {
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(req.body),
      headers: {'Content-Type': 'application/json'},
    });
    res.redirect('/products');
  } catch(error) {
    return next(error);
  }
})
.get('/', async (req, res, next) => {
  try {
    const response = await fetch(url);
    const products = await response.json();
    res.render('products', { products });
  } catch (error) {
    return next(error);
  }
})
  .get('/:id', async (req, res, next) => {
    try {
      const response = await fetch(url + "/" + req.params.id)
      const product = await response.json();
      res.render('product', {product});
    } catch (error) {
        return next(error);
    }
  })
  



// .get('/new', (req, res, next) => {
//   res.render('newRestaurant');
// })

// .get('/:id', async (req, res, next) => {
//   try {
//     const response = await fetch(url + "/" + req.params.id)
//     const restaurant = await response.json();
//   res.render('restaurant', {restaurant});
//   } catch (error) {
//       return next(error);
//   }
// })

// .get('/:id/edit', (req, res, next) => {
//   res.render('editRestaurant', {restaurantID: req.params.id});
// })



module.exports = Router;