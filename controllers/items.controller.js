const Item = require('../models/item.model');

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
        if (!items.length) {
            return res.status(404).json({message: 'No items found for this wishlist'});
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

const addItem = async (req, res) => {
    try {
        const item = Item.create(req.body);
        res.status(201).json(item);
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