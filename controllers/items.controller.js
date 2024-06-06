const Item = require('../models/item.model');
const Wishlist = require('../models/wishlist.model');

const getItemById = async (req, res) => {
    try {
        const {id} = req.params;
        const item = await Item.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

const getItemsByUser = async (req, res) => {

}

const getItemsByWishlist = async (req, res) => {
    try {
        const {wishlistId} = req.params;
        const items = await Item.find({wishlist: wishlistId});
        if (!items || items.length === 0) {
            return res.status(404).json({message: 'No items found for this wishlist'});
        }
        res.status(200).json({data: items});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const addItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);

        //Populate wishlist items with the saved item id
        const wishlistId = req.body.wishlist;
        const wishlist = await Wishlist.findById(wishlistId);
        wishlist.items.push(item._id);
        await wishlist.save();//TODO: update to save whole item data

        res.status(201).json({message: "Success", data: item});
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports = {
    getItemById,
    getItemsByUser,
    getItemsByWishlist,
    addItem,
}