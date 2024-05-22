const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const WishlistSchema = new mongoose.Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please specify a wishlist name"],
        },
        description: {
            type: String,
            required: false,
        },
        category: {
            type: String,
            required: [true, "Please select a wishlist category"],
        },
        items: [{
            type: Schema.Types.ObjectId,
            ref: "WishlistItem"
        }],
        isFavourite: {
            type: Boolean,
            required: false,
        },
    },
    {timestamps: true}
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;
