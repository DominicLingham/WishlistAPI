const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        wishlist: {
            type: Schema.Types.ObjectId,
            ref: 'Wishlist',
            required: true
        },
        name: String,
        description: String,
        url: String,
        price: {
            type: Number,
            min: [0, 'Price must not be negative'],
            default: 0
        },
        quantity: {
            type: Number,
            min: [0, 'Quantity must not be negative'],
            default: 0
        },
        priority: {
            type: Number,
            min: [0, 'Priority must not be negative'],
            default: 0
        },
    },
    {
        toJSON: {virtuals: true},
        toObject: {virtuals: true},
        timestamps: true,
    },
);

ItemSchema.virtual('totalPrice').get(function () {
    return this.price * this.quantity;
});

const Item = mongoose.model("Item", ItemSchema, "Items");

module.exports = Item;