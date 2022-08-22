const router = require('express').Router();
const {
  getAll, getById, updateDepo, deleteDepo, postDepo,
} = require('../controller/depoController');
const { auth } = require('../middleware/auth');

router.get('/depo', auth, getAll);

router.post('/depo', auth, postDepo);

router.get('/depo/:id', auth, getById);

router.put('/depo/:id', auth, updateDepo);

router.delete('/depo/:id', auth, deleteDepo);

module.exports = router;
