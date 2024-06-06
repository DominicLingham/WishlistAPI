const express = require('express');
const {
    addWishlist,
    getWishlistById,
    getWishlistsForUser
} = require('../controllers/wishlists.controller');

const router = express.Router();

router.get('/user/:userId', getWishlistsForUser);

router.get('/:id', getWishlistById);

router.post('/', addWishlist);

module.exports = router;