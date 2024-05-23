const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ['house', 'apartment', 'condo', 'studio', 'villa'],
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: {
    type: [String] // Array of image URLs
  },
  features: {
    type: [String] // Array of features and amenities
  },
  availability:{
    type:[Date]
  }
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;