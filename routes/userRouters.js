const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');

router.post('/register', userCtrl.createUser);
router.post('/wallet/add', userCtrl.addMoney);
router.post('/order', userCtrl.createOrder);

module.exports = router;
