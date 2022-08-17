const { model } = require("../config/index");
const MedicineService = require("./medicineService");

class OrderService {
  async getAll() {
    const order = await model.order.findAll({
      attributes: ["id", "count", "totalPrice"],
      include: [model.medicine, model.user],
    });
    return order;
  }

  async postOrder(data) {
    const order = await model.order.create(data);
    return order.id.toString();
  }

  async getById(id) {
    const order = await model.order.findByPk(id, {
      attributes: ["id", "count", "totalPrice"],
      include: [model.medicine, model.user],
    });
    return order;
  }

  async deleteOrder(id) {
    await model.order.destroy({ where: { id } });
    return null;
  }

  async updateOrder(data, id) {
    const order = await model.order.update(data, { where: { id } });
    return order.id;
  }
}

module.exports = OrderService;
