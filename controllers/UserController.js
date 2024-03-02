const User = require('../models/UserModel');
const bcrypt = require('bcrypt'); 
const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const userExist = await User.findOne({ username });
        
        if (userExist) {
            return res.status(400).json({ message: 'User already exists' });
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
        
        // Create a new user instance with the hashed password
        const newUser = new User({ username, password: hashedPassword });
        
        // Save the user to the database
        await newUser.save();
        
        return res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        console.log("Error while creating the user", error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user with the provided username
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Check if the provided password matches the stored password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // If the username and password are valid, return a success message
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports={createUser,loginUser};