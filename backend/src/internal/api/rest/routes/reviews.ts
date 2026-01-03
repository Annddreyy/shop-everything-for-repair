import express from 'express';
import { reviewsController } from '../controllers/reviews';

export const reviewRouter = express.Router();

reviewRouter.get('/', reviewsController.getReviews);
