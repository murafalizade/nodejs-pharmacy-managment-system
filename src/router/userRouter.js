const { login } = require('../controller/loginController');
const {
  getAll,
  postUser,
  deleteUser,
} = require('../controller/userController');
const { auth } = require('../middleware/auth');

// eslint-disable-next-line import/order
const router = require('express').Router();

router.get('/users', getAll);

router.post('/user', postUser);

router.delete('/user/:id', auth, deleteUser);

router.post('/user/login', login);

module.exports = router;
