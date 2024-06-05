const express = require('express');
const {
    getWishlistNames,
    addWishlist,
    getWishlistById, getAllWishlists
} = require('../controllers/wishlists.controller');

const router = express.Router();

router.get('/', getAllWishlists)

router.get('/:id', getWishlistById)

router.post('/', addWishlist);

module.exports = router;