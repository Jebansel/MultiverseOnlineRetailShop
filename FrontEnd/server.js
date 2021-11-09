const express = require('express');
const app = express();
const port = 8010;
const productRoutes = require('./routes/web/products');
const handlebars = require('./handlebars');

// set-up view "engine" - res.render
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));

// support urlencoded bodies (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

// use product routes
app.use('/products', productRoutes);
// app.use('/products', productRoutes);

// serve an index page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});