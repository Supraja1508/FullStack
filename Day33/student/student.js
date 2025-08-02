const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: true,
    min: 1
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  marks: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
