import express, { Response } from 'express';

import { PromotionCardsGetRequestModel } from '../app/model/promotion_card/PromotionCardsGetRequest.model';
import { PromotionCardsGetResponseModel } from '../app/model/promotion_card/PromotionCardsGetResponse.model';
import { promotionCardsQueryRepository } from '../app/repositories/promotion_cards/promotionCardsQuery.repository';
import {
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody,
    RequestWithQuery,
} from '../types';
import { promotionCardsService } from '../app/services/promotionCards.service';

export interface IPromotionCardViewWithoutID {
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}

export interface IPromotionCardView extends IPromotionCardViewWithoutID {
    id: string;
}

export const promotionsRouter = express.Router();

promotionsRouter.get(
    '/',
    async (
        req: RequestWithQuery<PromotionCardsGetRequestModel>,
        res: Response<PromotionCardsGetResponseModel>,
    ) => {
        const page = +req.query.page;
        const size = +req.query.size;

        const { promotions, pagesCount } =
            await promotionCardsQueryRepository.findPromotionCards(page, size);

        res.json({ promotions, pagesCount });
    },
);

promotionsRouter.get(
    '/:id',
    async (
        req: RequestWithParams<{ id: string }>,
        res: Response<IPromotionCardView>,
    ) => {
        const result = await promotionCardsQueryRepository.findPromotionCard(
            req.params.id,
        );
        if (result) {
            res.json(result);
            return;
        }
        res.sendStatus(404);
    },
);

promotionsRouter.post(
    '/',
    async (
        req: RequestWithBody<IPromotionCardViewWithoutID>,
        res: Response<{ id: string }>,
    ) => {
        const result = await promotionCardsService.createPromotionCard(
            req.body,
        );
        res.status(201).json({ id: result });
    },
);

promotionsRouter.put(
    '/:id',
    async (
        req: RequestWithParamsAndBody<
            { id: string },
            IPromotionCardViewWithoutID
        >,
        res: Response<{ id: string }>,
    ) => {
        const result = await promotionCardsService.updatePromotionCard(
            req.params.id,
            req.body,
        );
        if (result) {
            res.json({ id: result });
        }
        res.sendStatus(400);
    },
);

promotionsRouter.delete(
    '/',
    async (
        req: RequestWithParams<{ id: string }>,
        res: Response<{ id: string }>,
    ) => {
        const result = await promotionCardsService.deletePromotionCard(
            req.params.id,
        );
        if (result) {
            res.json({ id: result });
            return;
        }
        res.sendStatus(400);
    },
);
