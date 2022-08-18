const OrderService = require("../service/orderService");
const pdfMaker = require("../util/pdfMaker");


const orderService = new OrderService();

module.exports.downloadPDF = async (req, res) => {
  const { id } = req.params;
  let order = await orderService.getById(id);
  const fileName = await pdfMaker(order);
  const file =  `${process.cwd()}/public/files/${fileName}`;
  res.download(file); 
};

module.exports.getAll = async (req, res) => {
  // #swagger.tags = ['Order']
  const orders = await orderService.getAll();
  res.send(orders);
};

module.exports.postOrder = async (req, res) => {
  // #swagger.tags = ['Order']
  const  userId  = req.userId;
  console.log(userId);
  const id = await orderService.postOrder({ ...req.body, userId });
  res.send(id);
};

module.exports.getById = async (req, res) => {
  // #swagger.tags = ['Order']
  const order = await orderService.getById(req.params.id);
  res.send(order);
};

module.exports.deleteOrder = async (req, res) => {
  // #swagger.tags = ['Order']
  await orderService.deleteOrder(req.params.id);
  res.send(null);
};

module.exports.updateOrder = async (req, res) => {
  // #swagger.tags = ['Order']
  const order = await orderService.updateOrder(req.body, req.params.id);
  res.send(order);
};
