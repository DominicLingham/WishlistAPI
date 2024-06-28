const Wishlist = require("../models/wishlist.model");
const Item = require("../models/item.model");
const mongoose = require("mongoose");
const express = require("express");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getWishlistsForUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const wishlists = await Wishlist.find({ user: userId });

    if (!wishlists || wishlists.length === 0) {
      res.status(404).json({ message: "No wishlist found" });
    }

    res.status(200).json({ message: "Success", data: wishlists });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getWishlistById = async (req, res) => {
  try {
    const { id } = req.params;
    const wishlist = await Wishlist.findById(id);

    res.status(200).json({
      message: "Wishlist found successfully",
      data: { wishlist },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);
    res.status(200).json(wishlist);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not create wishlist", error: error.message });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addItemToWishlist = async (req, res) => {
  try {
    const { itemData, wishlistId } = req.body;
    const item = new Item(itemData); //TODO: Add item model validation

    const wishlist = await Wishlist.findById(wishlistId);

    if (!wishlist) {
      throw new Error("Wishlist not found");
    }

    wishlist.items.push(item);

    await wishlist.save();

    res.status(200).json({
      message: `Item successfully added to wishlist ${wishlist.name}`,
    });
  } catch (error) {
    res.status(401).json({
      message: `Could not add item to wishlist ${req.body.wishlistId}`,
      error: error,
    });
  }
};

module.exports = {
  addWishlist,
  getWishlistById,
  getWishlistsForUser,
  addItemToWishlist,
};
