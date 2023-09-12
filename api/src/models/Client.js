const { Sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize) => {
  sequelize.define("Client", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tributaryKey: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    tableName: "Clientes",
  });
};

//   Client.hasMany(Sale, {as: 'compras'});
