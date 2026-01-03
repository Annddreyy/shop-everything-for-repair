import express from 'express';
import { brandsController } from '../controllers/brands';

export const brandsRouter = express.Router();

brandsRouter.use('/', brandsController.getBrands);
