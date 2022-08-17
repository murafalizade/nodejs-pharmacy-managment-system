const MedicineService = require("../service/medicineService");
const OrderService = require("../service/orderService");

const orderService = new OrderService();
const medicineService = new MedicineService()

module.exports.getAll = async (req, res) => {
  // #swagger.tags = ['Order']
  const orders = await orderService.getAll();
  res.send(orders);
}

module.exports.postOrder = async (req, res) => {
  // #swagger.tags = ['Order']
  const  userId  = req.userId;
  let medicine = await medicineService.getById(req.body.medicineId);
  if (medicine.count < req.body.count) {
    return res.status(400).send("Not enough medicine");
  }
  medicine.count -= req.body.count;
  const medId = await medicineService.updateMedicine({count:medicine.count},req.body.medicineId);
  const totalPrice = medicine.price * req.body.count;
  const id = await orderService.postOrder({ ...req.body, totalPrice,userId });
  res.send(id);
}

module.exports.getById = async (req, res) => {
  // #swagger.tags = ['Order']
  const order = await orderService.getById(req.params.id);
  res.send(order);
}

module.exports.deleteOrder = async (req, res) => {
  // #swagger.tags = ['Order']
  await orderService.deleteOrder(req.params.id);
  res.send(null);
}

