const Wishlist = require('../models/wishlist.model');

const getWishlistNames = async (req, res) => {
    try {
        const wishlistNames = await Wishlist.find({user: req.params.userId}, 'name');
        if (!wishlistNames) {
            return res.status(404).json()
        }
    } catch (error) {

    }
};

const addWishlist = async (req, res) => {
    try {
        const wishlist = await Wishlist.create(req.body);
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAllWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.find({});
        res.status(200).json(wishlists);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getWishlistsForUser = async (req, res) => {
    try {
        const {id} = req.query;
        const wishlists = await Wishlist.find({userId: id});
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

module.exports = {
    getWishlistNames,
    addWishlist,
    getAllWishlists,
    getWishlistById
}