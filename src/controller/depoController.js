const DepoService = require("../service/depoService");

const depoService = new DepoService();

module.exports.getAll = async (req, res) => {
  // #swagger.tags = ['Depo']
  const depos = await depoService.getAll();
  res.send(depos);
}

module.exports.postDepo = async (req, res) => {
  // #swagger.tags = ['Depo']
  const { name, location } = req.body;
  const id = await depoService.postDepo({ name, location });
  res.send(id);
}

module.exports.getById = async (req, res) => {
  // #swagger.tags = ['Depo']
  const depo = await depoService.getById(req.params.id);
  res.send(depo);
}

module.exports.deleteDepo = async (req, res) => {
  // #swagger.tags = ['Depo']
  await depoService.deleteDepo(req.params.id);
  res.send(null);
}

module.exports.updateDepo = async (req, res) => {
  // #swagger.tags = ['Depo']
  const { name, location } = req.body;
  const id = await depoService.updateDepo({ name, location }, req.params.id);
  res.send(id);
}