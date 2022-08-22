const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Depo = sequelize.define('depo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
  });
  return Depo;
};
