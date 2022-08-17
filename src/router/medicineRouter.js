const router = require("express").Router();
const { getAll, postMedicine, deleteMedicine, getById, updateMedicine, uploadImage, downloadImage } = require("../controller/medicineController");
const { auth } = require("../middleware/auth");
const upload = require("../util/fileUploader");


router.get("/medicines",auth, getAll);

router.post("/medicine", auth,postMedicine);

router.delete("/medicine/:id",auth, deleteMedicine);

router.get("/medicine/:id",auth, getById);

router.put("/medicine/:id",auth, updateMedicine);

router.put('/medicine/:id/image', auth, upload.single('image'), uploadImage)

router.get('/medicine/image/:fileName',downloadImage)

module.exports = router;
