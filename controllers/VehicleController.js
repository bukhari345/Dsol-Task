// controllers/vehicleController.js
const Vehicle = require('../models/Vehicle');

// Controller function to handle vehicle submission
const submitVehicle = async (req, res) => {
  try {
    // Create a new vehicle instance based on request body
    const newVehicle = new Vehicle(req.body);
    
    // Save the new vehicle to the database
    await newVehicle.save();

    res.status(201).json({ message: 'Vehicle information submitted successfully' });
  } catch (error) {
    console.error('Error submitting vehicle:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  submitVehicle
};
