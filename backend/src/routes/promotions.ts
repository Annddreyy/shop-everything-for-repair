import express, { Response } from 'express';
import { PromotionCardsGetRequestModel } from '../model/promotion_card/PromotionCardsGetRequestModel';
import { PromotionCardsGetResponseModel } from '../model/promotion_card/PromotionCardsGetResponseModel';
import { RequestWithQuery } from '../types';
import { promotionCardsRepository } from '../repositories/promotionCardsRepository';

export const promotionsRouter = express.Router();

promotionsRouter.get(
    '/',
    async (
        req: RequestWithQuery<PromotionCardsGetRequestModel>,
        res: Response<PromotionCardsGetResponseModel>,
    ) => {
        let { promotions: promotionsResponse, pagesCount } =
            await promotionCardsRepository.findPromotions({
                page: +req.query.page,
                size: +req.query.size,
            });

        const promotions = promotionsResponse.map(({ _id, ...promotion }) => ({
            ...promotion,
            id: _id.toString(),
        }));

        res.json({ promotions, pagesCount });
    },
);
