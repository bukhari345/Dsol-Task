// routes/vehicleRoutes.js
const express = require('express');
const router = express.Router();
const {submitVehicle} = require('../controllers/VehicleController');

// Route to handle vehicle submission
router.post('/submit',submitVehicle);

module.exports = router;
