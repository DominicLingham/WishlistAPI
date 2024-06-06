const express = require('express');
const {
    getItemById,
    getItemsByUser,
    getItemsByWishlist,
    addItem,
} = require('../controllers/items.controller');

const router = express.Router();

router.get('/:id', getItemById);

router.get("/:userId", getItemsByUser);

router.get("/:wishlistId/items", getItemsByWishlist);

router.post("/", addItem);

module.exports = router;