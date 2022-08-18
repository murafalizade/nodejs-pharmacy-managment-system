const router = require("express").Router();
const {
  getAll,
  postOrder,
  getById,
  deleteOrder,
} = require("../controller/orderDetailController");
const { downloadPDF } = require("../controller/orderController");
const { auth } = require("../middleware/auth");


router.get("/order-details",auth, getAll);

router.post("/order-detail",auth, postOrder);

router.get("/order-detail/:id",auth, getById);

router.delete("/order-detail/:id", auth, deleteOrder);

router.get("/order/:id/pdf",auth, downloadPDF);

module.exports = router;
