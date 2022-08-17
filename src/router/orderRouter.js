const router = require("express").Router();
const {
  getAll,
  postOrder,
  getById,
  deleteOrder,
} = require("../controller/orderController");
const { downloadPDF } = require("../controller/orderPdfController");
const { auth } = require("../middleware/auth");


router.get("/orders",auth, getAll);

router.post("/order",auth, postOrder);

router.get("/order/:id",auth, getById);

router.delete("/order/:id", auth, deleteOrder);

router.get("/order/:id/pdf",auth, downloadPDF);

module.exports = router;
