const { login } = require("../controller/loginController");
const {
  getAll,
  postUser,
  deleteUser,
} = require("../controller/userController");
const { auth } = require("../middleware/auth");

const router = require("express").Router();

router.get("/users", auth, getAll);

router.post("/user", auth, postUser);

router.delete("/user/:id", auth, deleteUser);

router.post("/user/login", login);

module.exports = router;
