const express = require('express');
const {
    getItemById,
    getItemsByUser,
    getItemsByWishlist,
    addItem,
} = require('../controllers/items.controller');

const router = express.Router();

router.get('/:id', getItemById);

router.get("/:wishlistId/items", getItemsByWishlist);

module.exports = router;