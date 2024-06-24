const express = require("express");
const {
  addWishlist,
  getWishlistById,
  getWishlistsForUser,
} = require("../controllers/wishlists.controller");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/user/:userId", verifyToken, getWishlistsForUser);

router.get("/:id", verifyToken, getWishlistById);

router.post("/", verifyToken, addWishlist);

module.exports = router;
