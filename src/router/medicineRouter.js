const router = require('express').Router();
const {
  getAll,
  postMedicine,
  deleteMedicine,
  getById,
  updateMedicine,
  uploadImage,
  downloadImage,
  getByPage,
} = require('../controller/medicineController');
const { auth } = require('../middleware/auth');
const upload = require('../util/fileUploader');

router.get('/medicines', getAll);

router.post('/medicine', auth, postMedicine);

router.delete('/medicine/:id', auth, deleteMedicine);

router.get('/medicine/:id', auth, getById);

router.put('/medicine/:id', auth, updateMedicine);

router.put('/medicine/:id/image',  uploadImage);

router.get('/medicine/image/:fileName', downloadImage);

router.get('/medicines/pagination', auth, getByPage);

module.exports = router;
