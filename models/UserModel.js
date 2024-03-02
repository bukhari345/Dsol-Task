const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false //optional id
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Ensure that the 'id' field is set based on the ObjectId '_id' field
UserSchema.pre('save', function(next) {
    if (!this.id) {
        this.id = this._id.toString();
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
