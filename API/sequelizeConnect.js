const Sequelize = require('sequelize');

// import the models
const {
  productModel,
  categoryModel,
  userModel,
} = require('./models');

// connects to the db on localhost
const connection = new Sequelize('db', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database/db.sqlite',
});

// instances of the models - Product etc are the table names
const Category = connection.define('Category', categoryModel);
const Product = connection.define('Product', productModel);
const User = connection.define('User', userModel);

// define the relationships

/*
  Product -> categorys = one to many
  categorys -> categoryItems = one to many
  category belongs to one Product
  categoryItem belongs to one category
*/



// Product.hasOne(Category); // This added a productID to a category which
// was unnecessary

Category.hasMany(Product);




module.exports = { connection, Product, Category, User };