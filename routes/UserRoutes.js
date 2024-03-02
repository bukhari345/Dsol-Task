const express = require('express');
const router = express.Router();
const { createUser,loginUser} = require('../controllers/UserController');

// Route to handle user creation
router.post('/users', createUser);
//Route for Login Validation 
router.post('/login', loginUser);

module.exports = router;
