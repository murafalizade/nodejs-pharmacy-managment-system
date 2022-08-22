const { model } = require('../config/index');

class OrderDetailService {
  async getAll() {
    const order = await model.orderDetail.findAll({
      attributes: ['id', 'count', 'totalPrice'],
      include: [model.medicine],
    });
    return order;
  }

  async postOrder(data) {
    const order = await model.orderDetail.create(data);
    return order.id.toString();
  }

  async getById(id) {
    const order = await model.orderDetail.findByPk(id, {
      attributes: ['id', 'count', 'totalPrice'],
      include: [model.medicine],
    });
    return order;
  }

  async deleteOrder(id) {
    await model.orderDetail.destroy({ where: { id } });
    return null;
  }

  async updateOrder(data, id) {
    const order = await model.orderDetail.update(data, { where: { id } });
    return order.id;
  }
}

module.exports = OrderDetailService;
