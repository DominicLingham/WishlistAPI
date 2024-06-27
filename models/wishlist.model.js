const mongoose = require("mongoose");
const Item = require("../models/item.model");

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
    items: [Item.schema],
    isFavourite: {
      type: Boolean,
      required: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema, "Wishlists");

module.exports = Wishlist;
