import express from 'express';
import authUser from '../middleware/auth.js';
import adminAuth from '../middleware/admin.js';

import {
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateOrderStatus,
  verifyStripe,
} from '../controllers/orderController.js';

const orderRouter = express.Router();

//Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateOrderStatus);

//Payment Features
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/razorpay', authUser, placeOrderRazorpay);
orderRouter.post('/stripe', authUser, placeOrderStripe);

//User Features
orderRouter.post('/userorders', authUser, userOrders);

//Verify Payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);

export default orderRouter;
