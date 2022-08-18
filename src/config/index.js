const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  "postgres://postgres:murad1979@localhost:5432/pharmacy2"
); // Example for postgres

const model = {}

model.depo = require("../models/depo")(sequelize);
model.medicine = require("../models/medicine")(sequelize);
model.orderDetail = require("../models/orderDetail")(sequelize);
model.user = require("../models/user")(sequelize);
model.order = require("../models/order")(sequelize);

model.orderDetail.belongsTo(model.medicine);
model.medicine.hasOne(model.orderDetail);
model.depo.hasMany(model.medicine, { as: "medicines" });
model.medicine.belongsTo(model.depo);
model.order.belongsTo(model.user);
model.user.hasMany(model.order);
model.order.hasMany(model.orderDetail, {as:"orderDetails"});
model.orderDetail.belongsTo(model.order);

// sequelize
//    .sync({ alter: true })
//    .then(() => {
//      console.log("Drop and re-sync db.");
//    })
//    .catch((err) => {
//      console.log("Error:", err);
//    });

module.exports = {sequelize,model};