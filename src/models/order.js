const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Order = sequelize.define("order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    totalCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
      defaultValue: 0,
    },
    file:{
      type: DataTypes.STRING,
    }
  });
  return Order;
};
