const { connection, Product, User, Category } = require("./sequelizeConnect");
const productsjson = require("./products.json");
const categoriesjson = require("./categories.json");
const express = require("express");
const app = express();
const port = 3010;
const cors = require("cors");

app.use(cors());

// support req.body parsing
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app
  .get("/api/products", async (req, res) => {
    try {
      // create a row in the database using sequelize create method
      const products = await Product.findAll({});

      // 200 = success
      res.status(200).send(products);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })
  .post("/api/products", async (req, res) => {
    try {
      const products = await Product.create(req.body);

      // 201 = created a resource
      res.status(201).send(products);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .get("/api/products/:id", async (req, res) => {
    try {
      const singleProduct = await Product.findOne({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(singleProduct);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .get("/api/products/category/:categoryId", async (req, res) => {
    try {
      const categoryBasedProducts = await Product.findAll({
        where: {
          CategoryId: req.params.categoryId,
        },
      });
      res.status(200).send(categoryBasedProducts);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

app.post("/api/basket", async (req, res) => {
  console.log(req.body);
  try {
    const basket = await Product.findAll({
      where: {
        id: req.body.productIds,
      },
    });
    res.status(200).send(basket);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

async function start() {
  // Comment/Comment Out as necessary
  // await Category.bulkCreate(categoriesjson);
  // await Product.bulkCreate(productsjson);

  await connection.sync({
    logging: false, // don't log everything
  // force: true, // drop tables each time
  });
}

// run start and log any errors
start()
  .then(() => console.log("Sequelize connected"))
  .catch((e) => console.log(`Caught error: ${e}`));

app.listen(port, () => console.log(`Express server running on port ${port}`));
