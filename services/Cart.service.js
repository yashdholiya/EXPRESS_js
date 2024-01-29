// const { UpdateCart } = require('../controller/cart.controller');
const Cart = require('../models/cart.model');

module.exports = class CartServices {
  // add to cart
  async addToCart(body) {
    try {
      return await Cart.create(body);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // get cart
  async getCart(body) {
    try {
      return await Cart.findOne(body);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  // get all carts
  async getAllCart(body) {
    try {
      return await Cart.find(body)
        .populate('cartItem')
        .populate({
          path: 'user',
          model: 'users',
          select: 'firstName lastName email'
        });
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  // update cart
  async updateCart(id, body) {
    try {
        return await Cart.findByIdAndUpdate(id, { $set: body }, { new: true });
    } catch (error) {
        console.log(error);
        return error.message;
    }
};
};