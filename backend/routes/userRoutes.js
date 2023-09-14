import express from 'express';
import User from '../models/userModel.js';
import { isAuth, isAdmin, generateToken } from '../utils.js';
import {
  deleteUser,
  getUser,
  getUsers,
  updateProfile,
  updateUser,
  userSignin,
  userSignup,
} from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/', isAuth, isAdmin, getUsers);
userRouter.put('/profile', isAuth, updateProfile);
userRouter.post('/signin', userSignin);
userRouter.post('/signup', userSignup);
userRouter.get('/:id', isAuth, getUser);
userRouter.put('/:id', isAuth, isAdmin, updateUser);
userRouter.delete('/:id', isAuth, isAdmin, deleteUser);

export default userRouter;
