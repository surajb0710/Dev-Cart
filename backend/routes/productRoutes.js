import express from 'express';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/admin.js';
import {
  addProduct,
  removeProduct,
  singleProductInfo,
  listProduct,
} from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post(
  '/add',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.post('/single', singleProductInfo);
productRouter.get('/list', listProduct);

export default productRouter;
