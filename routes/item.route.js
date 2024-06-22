const express = require("express");
const {
  getItemById,
  getItemsByUser,
  getItemsByWishlist,
  addItem,
} = require("../controllers/items.controller");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id", verifyToken, getItemById);

router.get("/:userId", verifyToken, getItemsByUser);

router.get("/:wishlistId/items", verifyToken, getItemsByWishlist);

router.post("/", verifyToken, addItem);

module.exports = router;
