import express from 'express';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';
import {
  getAllOrders,
  getOrderId,
  orderPay,
  postOrder,
  orderHistory,
  orderDelivered,
  orderDelete,
  orderSummary,
} from '../controller/orderController.js';
import { isAuth, isAdmin } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get('/', isAuth, isAdmin, getAllOrders);
orderRouter.post('/', isAuth, postOrder);
orderRouter.get('/mine', isAuth, orderHistory);
orderRouter.get('/:id', isAuth, getOrderId);
orderRouter.put('/:id/pay', isAuth, orderPay);
orderRouter.put('/:id/deliver', isAuth, orderDelivered);
orderRouter.get('/summary', isAuth, isAdmin, orderSummary);
orderRouter.delete('/:id', isAuth, isAdmin, orderDelete);

export default orderRouter;
