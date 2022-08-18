const MedicineService = require("../service/medicineService");
const OrderDetailService = require("../service/orderDetailService");
const OrderService = require("../service/orderService");

const orderDetailService = new OrderDetailService();
const medicineService = new MedicineService();
const orderService = new OrderService();

module.exports.getAll = async (req, res) => {
  // #swagger.tags = ['OrderDetail']
  const orders = await orderDetailService.getAll();
  res.send(orders);
};

module.exports.postOrder = async (req, res) => {
  // #swagger.tags = ['OrderDetail']
  const { orderId } = req.body;
  let medicine = await medicineService.getById(req.body.medicineId);
  if (medicine.count < req.body.count) {
    return res.status(400).send("Not enough medicine");
  }
  medicine.count -= req.body.count;
  const medId = await medicineService.updateMedicine(
    { count: medicine.count },
    req.body.medicineId
  );
  const totalPrice = medicine.price * req.body.count;
  const id = await orderDetailService.postOrder({ ...req.body, totalPrice });
  let order = await orderService.getById(orderId);
  order.totalCount += req.body.count;
  order.totalPrice += totalPrice;
  console.log(totalPrice, order);
  const updatedId = await orderService.updateOrder(
    { totalCount: order.totalCount, totalPrice: order.totalPrice },
    order.id
  );
  res.send(id);
};

module.exports.getById = async (req, res) => {
  // #swagger.tags = ['OrderDetail']
  const order = await orderDetailService.getById(req.params.id);
  res.send(order);
};

module.exports.deleteOrder = async (req, res) => {
  // #swagger.tags = ['OrderDetail']
  await orderDetailService.deleteOrder(req.params.id);
  res.send(null);
};
