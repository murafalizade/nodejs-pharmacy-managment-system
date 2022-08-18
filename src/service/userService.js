const { model } = require("../config/index");

class UserService {
  async getAll() {
    const user = await model.user.findAll({
      attributes: ["id", "email", "password"],
    });
    return user;
  }

  async postUser(data) {
    const res = "";
    try {
      const user = await model.user.create(data);
      res = user.id.toString();
    } catch (err) {
      return err;
    }
    return res;
  }

  async getById(id) {
    try {
      const user = await model.user.findByPk(id, {
        attributes: ["id", "email", "password"],
      });
      return user;
    } catch (err) {
      return "User not found";
    }
  }

  async updateUser(data, id) {
    const user = await model.user.update(data, { where: { id } });
    return user.id;
  }

  async deleteUser(id) {
    await model.user.destroy({ where: { id } });
    return null;
  }

  async getUserByEmail(email) {
    const user = await model.user.findOne({
      attributes: ["id", "email", "password"],
      where: { email },
    });
    return user;
  }
}

module.exports = UserService;
