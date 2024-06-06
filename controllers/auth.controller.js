const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 13);

    try {
        const user = await User.create({username: username, password: hashedPassword});
        res.status(500).json(user);
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

module.exports = {
    registerUser,
};