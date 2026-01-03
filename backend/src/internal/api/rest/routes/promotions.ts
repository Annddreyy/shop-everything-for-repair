import express from 'express';
import { promotionsController } from '../controllers/promotions';
import { baseMiddlewareGroup } from '../middlewares';

export const promotionRouter = express.Router();

promotionRouter.get('/', promotionsController.getPromotions);
promotionRouter.get('/:id', promotionsController.getPromotion);

promotionRouter.post(
    '/',
    baseMiddlewareGroup,
    promotionsController.createPromotion,
);
promotionRouter.put(
    '/:id',
    baseMiddlewareGroup,
    promotionsController.updatePromotion,
);
promotionRouter.delete(
    '/',
    baseMiddlewareGroup,
    promotionsController.deletePromotion,
);
