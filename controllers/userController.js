const User = require('../models/User');
const Product = require('../models/Product');
const Order = require('../models/Order');

// Register User
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

// Add money to wallet
exports.addMoney = async (req, res) => {
  const { userId, amount } = req.body;
  const user = await User.findById(userId);
  user.wallet += amount;
  await user.save();
  res.json({ wallet: user.wallet });
};

// Create Order
exports.createOrder = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const user = await User.findById(userId);
  const product = await Product.findById(productId);

  const totalPrice = quantity * product.price;

  if (product.quantity < quantity) return res.status(400).send('Insufficient stock');
  if (user.wallet < totalPrice) return res.status(400).send('Insufficient wallet balance');

  user.wallet -= totalPrice;
  product.quantity -= quantity;

  const order = await Order.create({ userId, productId, quantity });
  user.orders.push(order._id);

  await user.save();
  await product.save();

  res.status(201).json({ message: 'Order placed', order });
};
