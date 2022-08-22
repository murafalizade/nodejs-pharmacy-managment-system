const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const OrderDeatil = sequelize.define('orderDetail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DOUBLE,
    },
  });
  return OrderDeatil;
};
