// Require the Express module
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.set('strictQuery', true);
dotenv.config({ path: './config.env' });
//Database connection
require('./DB/connection');
// Create an instance of Express
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.ACCESS_CONTROL_ALLOW_ORIGIN);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const UserRoutes = require('./routes/UserRoutes');
const vehicleRoutes = require('./routes/VehicleRoutes');

//middleware
app.use(express.json());

// Mount the user routes
app.use('/api', UserRoutes);
// Mount the Vehicle Routes
app.use('/vehicles', vehicleRoutes);

// Start the server on the port defined in the environment variable
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is started successfully!`);
});
