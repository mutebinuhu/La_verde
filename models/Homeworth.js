const mongoose = require('mongoose');

const HomeworthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Homeworth = mongoose.models.Homeworth || mongoose.model('Homeworth', HomeworthSchema);

module.exports = Homeworth;
