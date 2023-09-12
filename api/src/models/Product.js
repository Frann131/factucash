const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    measurement: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    costPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    wholesalerPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 10,
    },
    retailPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 30,
    },
    iva: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 21,
    },
    iibb: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 3,
    },
    code: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "Productos",
  });
};

//   Product.belongsToMany(Purchase, { through: "PurchaseProduct" });
//   Product.belongsToMany(Sale, { through: "SaleProduct" });
