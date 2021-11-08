const express = require("express");
const app = express();
const port = 3005;
const cors = require('cors');

app.use(cors());

// support req.body parsing
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/api/restaurants", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const restaurants = await Restaurant.findAll({});

    // 200 = success
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.get("/api/restaurants/:id", async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const rest_ID = await Restaurant.findOne({
      where: {
        id: req.params.id,
      },
    });

    // 200 = success
    res.status(200).send(rest_ID);
  } catch (e) {
    res.status(400).send(e.message);
  }
});