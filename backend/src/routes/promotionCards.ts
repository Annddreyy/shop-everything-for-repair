import express, { Response } from 'express';
import {
    PromotionCardsGetRequestModel,
    PromotionCardsGetResponseModel,
} from '@/app/model';
import { promotionCardsQueryRepository } from '@/app/repositories';
import { promotionCardsService } from '@/app/services';

export interface PromotionCardView {
    id: string;
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}

export type PromotionCardViewWithoutID = Omit<PromotionCardView, 'id'>;

export const promotionCardsRouter = express.Router();

promotionCardsRouter.get(
    '/',
    async (
        req: RequestWithQuery<PromotionCardsGetRequestModel>,
        res: Response<PromotionCardsGetResponseModel>,
    ) => {
        const page = +req.query.page;
        const size = +req.query.size;

        const { promotions, pagesCount } =
            await promotionCardsQueryRepository.findPromotionCards({
                page,
                size,
            });

        res.json({ promotions, pagesCount });
    },
);

promotionCardsRouter.get(
    '/:id',
    async (
        req: RequestWithParams<WithId>,
        res: Response<PromotionCardView>,
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

promotionCardsRouter.post(
    '/',
    async (
        req: RequestWithBody<PromotionCardViewWithoutID>,
        res: Response<WithId>,
    ) => {
        const result = await promotionCardsService.createPromotionCard(
            req.body,
        );
        res.status(201).json({ id: result });
    },
);

promotionCardsRouter.put(
    '/:id',
    async (
        req: RequestWithParamsAndBody<WithId, PromotionCardViewWithoutID>,
        res: Response<WithId>,
    ) => {
        const result = await promotionCardsService.updatePromotionCard({
            id: req.params.id,
            update: req.body,
        });
        if (result) {
            res.json({ id: result });
        }
        res.sendStatus(400);
    },
);

promotionCardsRouter.delete(
    '/',
    async (req: RequestWithParams<WithId>, res: Response<WithId>) => {
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
