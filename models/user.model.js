const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema, 'Users');

module.exports = User;