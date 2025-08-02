const Product = require('../models/Product');
const Order = require('../models/Order');

// Add product
exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
};

// View all orders
exports.viewOrders = async (req, res) => {
  const orders = await Order.find().populate('userId').populate('productId');
  res.json(orders);
};

// Accept Order
exports.acceptOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  order.status = 'accepted';
  await order.save();
  res.json({ message: 'Order accepted', order });
};
