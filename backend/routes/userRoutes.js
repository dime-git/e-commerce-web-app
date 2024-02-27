import express from 'express';
import { isAuth } from '../utils/isAuth.js';
import { isAdmin } from '../utils/isAdmin.js';
import {
  deleteUser,
  getUser,
  getUsers,
  updateProfile,
  updateUser,
  userSignin,
  userSignup,
  forgetPassword,
  resetPassword,
} from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/', isAuth, isAdmin, getUsers);
userRouter.get('/:id', isAuth, isAdmin, getUser);
userRouter.put('/profile', isAuth, updateProfile);
userRouter.post('/forget-password', forgetPassword);
userRouter.post('/reset-password', resetPassword);
userRouter.put('/:id', isAuth, isAdmin, updateUser);
userRouter.delete('/:id', isAuth, isAdmin, deleteUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/signup', userSignup);
userRouter.post('/signin', userSignin);

export default userRouter;
