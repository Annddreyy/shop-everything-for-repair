import express from 'express';
import { regionsController } from '../controllers/regions';

export const regionsRouter = express.Router();

regionsRouter.get('/', regionsController.getRegions);
