const UserService = require("../service/userService");
const Cyrption = require("../util/cryption");

const userService = new UserService();

module.exports.getAll = async (req, res) => {
  // #swagger.tags = ['User']
  const users = await userService.getAll();
  res.send(users);
};

module.exports.postUser = async (req, res) => {
  // #swagger.tags = ['User']
  let { email, password } = req.body;
  password = Cyrption.hashPassword(password);
  const id = await userService.postUser({ email, password });
  res.send(id);
};

module.exports.getById = async (req, res) => {
  // #swagger.tags = ['User']
  const user = await userService.getById(req.params.id);
  res.send(user);
};

module.exports.deleteUser = async (req, res) => {
  // #swagger.tags = ['User']
  await userService.deleteUser(req.params.id);
  res.send(null);
};
