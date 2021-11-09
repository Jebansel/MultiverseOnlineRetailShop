const { connection, Product, User, Category } = require("./sequelizeConnect");
const productsjson = require ("./products.json")
const categoriesjson = require ("./categories.json")
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
      const singleProduct = await Product.findAll({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send(singleProduct);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

app
  .get("/api/category", async (req, res) => {
    try {
      const category = await Category.findAll({});

      res.status(200).send(category);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .post("/api/category", async (req, res) => {
    // creates a category
    try {
      const category = await Category.create(req.body);

      res.status(201).send(category);
    } catch (e) {
      res.status(400).send(e.message);
    }
  })

  .put("/api/category/:id", async (req, res) => {
    const toUpdate = await Category.findByPk(req.params.id);
    await toUpdate.update(req.body);
    res.status(202).send(toUpdate);
  })

  .post("/api/category/:id/product", async (req, res) => {
    // creates a product with a categoryID

    try {
      // create a row in the database using sequelize create method
      const category = await Category.findOne({
        where: {
          id: req.params.id,
        },
      });

      const products = await Product.create(req.body);

      category.addProduct(products);

      // 200 = success
      res.status(200).send(products);
    } catch (e) {
      res.status(400).send(e.message);
    }
  });

async function start() {
  await Product.bulkCreate(productsjson);
  await Category.bulkCreate(categoriesjson);
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
