const Sequelize = require("sequelize");

// model = outline of the data we'll store against an entity
const productModel = {
  title: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
  description: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
  image: {
    // put validation for url
    type: Sequelize.STRING,
    isUrl: true,
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  }, 
  
};

const categoryModel = {
  name: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
};

const userModel = {
  name: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
  address: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
  phoneNumber: {
    type: Sequelize.STRING, // TEXT in sqlite
    allowNull: false,
    validate: {
      notNull: {
        msg: "Must input a value",
      },
    },
  },
};

module.exports = { productModel, categoryModel, userModel };

// edit accordingly and add validation
