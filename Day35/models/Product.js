const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  ratings: [Number]
});

module.exports = mongoose.model('Product', productSchema);
