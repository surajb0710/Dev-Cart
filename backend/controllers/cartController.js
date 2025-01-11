import { response } from 'express';
import userModel from '../models/userModel.js';

// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { itemId, size, userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: 'Product has been added to cart' });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });

    console.log(error);
  }
};

// update products to user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({
      success: true,
      message: 'Cart Updated',
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
    console.log(error);
  }
};

// get user cart data
const getUserCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({
      success: true,
      cartData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { addToCart, updateCart, getUserCart };
