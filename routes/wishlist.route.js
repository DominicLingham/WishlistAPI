const express = require("express");
const {
  addWishlist,
  getWishlistById,
  getWishlistsForUser,
  addItemToWishlist,
} = require("../controllers/wishlists.controller");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/user/:id", verifyToken, getWishlistsForUser);

router.get("/:id", verifyToken, getWishlistById);

router.post("/addWishlist", verifyToken, addWishlist);

router.post("/addItem", verifyToken, addItemToWishlist);

module.exports = router;
