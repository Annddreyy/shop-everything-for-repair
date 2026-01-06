import { Router } from 'express';
import { promocodesController } from '../controllers/promocodes';

export const promocodesRouter = Router();

promocodesRouter.get('/', promocodesController.getPromocode);
