import express from 'express';
import { seedController } from '../controller/seedController.js';

const seedRouter = express.Router();

seedRouter.get('/', seedController);

export default seedRouter;
