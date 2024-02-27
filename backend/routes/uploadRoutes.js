import express from 'express';
import multer from 'multer';
import { isAdmin } from '../utils/isAdmin.js';
import { isAuth } from '../utils/isAuth.js';
import dotenv from 'dotenv';
import { uploadFileToCloudinary } from '../controller/uploadController.js';

dotenv.config();

const upload = multer();

const uploadRouter = express.Router();

uploadRouter.post(
  '/',
  isAuth,
  isAdmin,
  upload.single('file'),
  uploadFileToCloudinary
);
export default uploadRouter;
