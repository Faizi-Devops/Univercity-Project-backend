const mongoose = require('mongoose');

const userregisterSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim : true
  },
  email: {
    type: String,
    required: true,
    trim : true,
    unique: true
  },
  password: {
    type: String,
    trim : true,
    required: true
  },
  contactNumber: {
    type: String,
    trim: true,
    required: true
  }
});

const User = mongoose.model('UserRegister', userregisterSchema);

module.exports = User;
