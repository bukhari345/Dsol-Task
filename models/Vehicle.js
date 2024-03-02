// models/Vehicle.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  carModel: {
    type: String,
    minlength: 3,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(v) {
        return /^[0-9]{11}$/.test(v); // Validate exactly 11 digits
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: true
  },
  city: {
    type: String,
    required: true
  },
  maxPictures: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  },
  pictures: [String] // Array of picture URLs
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
