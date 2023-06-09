
const mongoose = require('mongoose');


const staycationSchema = new mongoose.Schema({

  
  restaurant: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  cityImg: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  cuisine: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  hours: {
    type: String,
    required: false,
  }
});

// Create the Staycation model from the schema
const Staycation = mongoose.model('Staycation', staycationSchema);

// Export the Staycation model
module.exports = Staycation;
