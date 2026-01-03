import express from 'express';
import { advantagesController } from '../controllers/advantages';

export const advantagesRouter = express.Router();

advantagesRouter.get('/', advantagesController.getAdvantages);
