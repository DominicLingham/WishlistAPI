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
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true},
        timestamps: true,
    }
);

WishlistSchema.virtual('totalWishlistPrice').get(async function () {
    const items = await mongoose.model('Item').find({wishlist: this._id});
    return items.reduce((total, item) => total + item.totalPrice, 0);
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema, "Wishlists");

module.exports = Wishlist;
