const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:murad1979@localhost:5432/pharmacy') // Example for postgres

module.exports = sequelize;