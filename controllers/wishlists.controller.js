const Wishlist = require('../models/wishlist.model');
const mongoose = require('mongoose');

const getWishlistsForUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const wishlists = await Wishlist.find({user: userId});

        if (!wishlists || wishlists.length === 0) {
            res.status(404).json({message: 'No wishlist found'});
        }

        res.status(200).json({message: 'Success', data: wishlists});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getWishlistById = async (req, res) => {
    try {
        const {id} = req.params;
        const wishlist = await Wishlist.findById(id);
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.create(req.body);
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    addWishlist,
    getWishlistById,
    getWishlistsForUser,
}