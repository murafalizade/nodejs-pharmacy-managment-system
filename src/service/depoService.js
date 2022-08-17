const { model } = require("../config/index");

class DepoService {
  async getAll() {
    const depos = await model.depo.findAll({
      attributes: ["id", "name", "location"],
      include: ["medicines"],
    });
    return depos;
  }

  async postDepo(data) {
    const depo = await model.depo.create(data);
    return depo.id.toString();
  }

  async getById(id) {
    const depo = await model.depo.findByPk(id, {
      attributes: ["id", "name", "location"],
      include: ["medicines"],
    });
    return depo;
  }

  async deleteDepo(id) {
    await model.depo.destroy({ where: { id } });
    return null;
  }
}

module.exports = DepoService;
