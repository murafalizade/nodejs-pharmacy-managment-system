const { model } = require("../config/index");

class MedicineService {
  async getAll() {
    const medicines = await model.medicine.findAll({
      attributes: ["id", "name", "description", "price", "count","image"],
      include: ["depo"],
    });
    return medicines;
  }

  async postMedicine(data) {
    const medicine = await model.medicine.create(data);
    return medicine.id.toString();
  }

  async getById(id) {
    const medicine = await model.medicine.findByPk(id, {
      attributes: ["id", "name", "description", "price", "count"],
      include: ["depo"],
    });
    return medicine;
  }

  async deleteMedicine(id) {
    await model.medicine.destroy({ where: { id } });
    return null;
  }

  async updateMedicine(data, id) {
    await model.medicine.update(data, { where: { id } });
    return id.toString();
  }

  async uploadImage(id, image) {
    await model.medicine.update({image},{ where: { id } });
    return id.toString();
  }

  async getAllByPage(page, limit) {
    const medicines = await model.medicine.findAndCountAll({
      attributes: ["id", "name", "description", "price", "count"],
      include: ["depo"],
      offset: (page - 1) * limit,
      limit,
    });
    return medicines;
  }
}



module.exports = MedicineService;
