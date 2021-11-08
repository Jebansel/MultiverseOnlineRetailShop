const Sequelize = require('sequelize');

// model = outline of the data we'll store against an entity
const restaurantModel = {
  name: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
  },
  imagelink: {
    type: Sequelize.STRING,
    isUrl: true,
    allowNull: false,
  },
};

// edit accordingly and add validation