import express from 'express';

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
import { isAdmin } from '../utils/isAdmin.js';
import { isAuth } from '../utils/isAuth.js';

const orderRouter = express.Router();

orderRouter.get('/', isAuth, isAdmin, getAllOrders);
orderRouter.post('/', isAuth, postOrder);
orderRouter.get('/mine', isAuth, orderHistory);
orderRouter.get('/summary', isAuth, isAdmin, orderSummary);
orderRouter.get('/:id', isAuth, getOrderId);
orderRouter.put('/:id/pay', isAuth, orderPay);
orderRouter.put('/:id/deliver', isAuth, orderDelivered);
orderRouter.delete('/:id', isAuth, isAdmin, orderDelete);

export default orderRouter;
