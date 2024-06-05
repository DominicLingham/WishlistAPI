const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI_DEV, {
            dbName: 'WishlistsDev', // Specify the database name here
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection to MongoDB failed:", error);
    }
};

module.exports = connectDB;
