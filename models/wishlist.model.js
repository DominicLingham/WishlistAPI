const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema(
  {
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
    items: {
      type: Array,
      required: [true, "Please specify a list of wishlist items"],
    },
    isFavourite: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);

module.exports = Wishlist;
