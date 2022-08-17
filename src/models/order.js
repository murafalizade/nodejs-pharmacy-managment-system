const {  DataTypes } = require("sequelize");
const Medicine = require("./medicine");
const User = require("./user");

module.exports = (sequelize) => {
  const Order = sequelize.define("order", {
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
      type: DataTypes.DOUBLE
    }
  });
  return Order;
};

/*
        public int Id { get; set; }
        public int MedicineId { get; set; }
        public int Count { get; set; }
        public double TotalPrice { get; set; }
        public int SellerId { get; set; }
        public string OrderId { get; set; }*/