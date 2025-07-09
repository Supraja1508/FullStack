const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/adminController');

router.post('/product', adminCtrl.addProduct);
router.get('/orders', adminCtrl.viewOrders);
router.patch('/order/accept/:id', adminCtrl.acceptOrder);

module.exports = router;
