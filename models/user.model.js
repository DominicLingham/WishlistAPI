const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true
        }, //TODO: Add validation
        hash: String,
        salt: String,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;