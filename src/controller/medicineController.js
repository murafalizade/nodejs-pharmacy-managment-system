const MedicineService = require("../service/medicineService");
const path = require("path");
const { fileURLToPath } =  require("url");


// 👇️ "/home/john/Desktop/javascript"
// const __dirname = path.dirname();


const medicineService = new MedicineService();

module.exports.getAll = async (req, res) => {
  // #swagger.tags = ['Medicine']
  const medicines = await medicineService.getAll();
  res.send(medicines);
}

module.exports.postMedicine = async (req, res) => {
  // #swagger.tags = ['Medicine']
  const { name, price, count,description, depoId } = req.body;
  const id = await medicineService.postMedicine({
    name,
    price,
    count,
    description,
    depoId
  });
  res.send(id);
}

module.exports.getById = async (req, res) => {
  // #swagger.tags = ['Medicine']
  const medicine = await medicineService.getById(req.params.id);
  res.send(medicine);
}

module.exports.updateMedicine = async (req, res) => {
  // #swagger.tags = ['Medicine']
  const { name, price, count, description, depoId, expDate } = req.body;
  const id = await medicineService.updateMedicine(
    { name, price, count, description, depoId, expDate },
    req.params.id
  );
  res.send(id);
}

module.exports.deleteMedicine = async (req, res) => {
  // #swagger.tags = ['Medicine']
  await medicineService.deleteMedicine(req.params.id);
  res.send(null);
}

module.exports.uploadImage = async (req, res) => {
  // #swagger.tags = ['Medicine']
  /*
          #swagger.consumes = ['multipart/form-data']  
          #swagger.parameters['image'] = {
              in: 'formData',
              type: 'file',
              required: 'true',
              description: 'Some description...',
        } */
  console.log(req.file.filename)
  const id = await medicineService.uploadImage(req.params.id, req.file.filename);
  res.send(id);
}

module.exports.downloadImage = async (req, res) => {
  // #swagger.tags = ['Medicine']
  const file = `${process.cwd()}/public/uploads/${req.params.fileName}`;
  res.download(file); 
}