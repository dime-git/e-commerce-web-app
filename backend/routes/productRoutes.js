import express from 'express';
import Product from '../models/productModel.js';
import { isAdmin } from '../utils/isAdmin.js';
import { isAuth } from '../utils/isAuth.js';

import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
  adminProductList,
  filteredProductsData,
  getDistinctCategories,
  getProductBySlug,
  getProductById,
} from '../controller/productController.js';

const productRouter = express.Router();

productRouter.get('/', getProduct);
productRouter.put('/:id', isAuth, isAdmin, updateProduct);
productRouter.post('/', isAuth, isAdmin, createProduct);
productRouter.post('/', createProduct);
productRouter.delete('/:id', isAuth, isAdmin, deleteProduct);
productRouter.get('/admin', isAuth, isAdmin, adminProductList);
productRouter.get('/search', filteredProductsData);
productRouter.get('/categories', getDistinctCategories);
productRouter.get('/slug/:slug', getProductBySlug);
productRouter.get('/:id', getProductById);

export default productRouter;
