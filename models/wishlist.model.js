const mongoose = require("mongoose");

const WishlistSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please specify a wishlist name"],
            unique: true,
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
            type: mongoose.SchemaTypes.ObjectId,
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
