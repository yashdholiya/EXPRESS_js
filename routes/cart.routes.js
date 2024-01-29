const express = require("express");
const cartRouter = express.Router();
const { addNewCart, getAllCart, updateCart } = require('../controller/cart.controller');
const { verifyToken } = require("../helpers/verifyToken");
// const { model } = require("mongoose");

cartRouter.post('/add-cart',verifyToken,addNewCart);
cartRouter.get('/all-cart', verifyToken,getAllCart);
cartRouter.get('/Update-cart', verifyToken,updateCart);

module.exports = cartRouter;