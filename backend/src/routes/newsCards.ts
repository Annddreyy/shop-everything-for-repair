import express, { Response } from 'express';
import { newsCardsQueryRepository } from '@/app/repositories';
import { newsCardsService } from '@/app/services';
import {
    NewsCardsGetRequestModel,
    NewsCardsGetResponseModel,
} from '@/app/model';
import { NewsCard } from '@/app/services/news_cards/types';

export const newsCardsRouter = express.Router();

export interface NewsCardView {
    id: string;
    title: string;
    img: string;
    description: string;
    date: Date;
}

export type NewsCardViewWithoutID = Omit<NewsCardView, 'id'>;

newsCardsRouter.get(
    '/',
    async (
        req: RequestWithQuery<NewsCardsGetRequestModel>,
        res: Response<NewsCardsGetResponseModel>,
    ) => {
        const page = +req.query.page;
        const size = +req.query.size;

        const { newsCards, pagesCount } =
            await newsCardsQueryRepository.findNewsCards({ page, size });

        res.json({ newsCards, pagesCount });
    },
);

newsCardsRouter.get(
    '/:id',
    async (req: RequestWithParams<WithId>, res: Response<NewsCardView>) => {
        const newsCard = await newsCardsQueryRepository.findNewsCard(
            req.params.id,
        );

        if (!newsCard) {
            res.sendStatus(404);
            return;
        }

        res.json(newsCard);
    },
);

newsCardsRouter.post(
    '/',
    async (
        req: RequestWithBody<NewsCardViewWithoutID>,
        res: Response<WithId>,
    ) => {
        const { title, img, description, date } = req.body;
        const result = await newsCardsService.createNewsCard({
            img,
            title,
            description,
            date,
        });

        res.status(201).json({
            id: result,
        });
    },
);

newsCardsRouter.put(
    '/:id',
    async (
        req: RequestWithParamsAndBody<WithId, NewsCard>,
        res: Response<NewsCardView>,
    ) => {
        const id = await newsCardsService.updateNewsCard({
            id: req.params.id,
            update: req.body,
        });
        if (!id) {
            res.sendStatus(400);
            return;
        }

        const updatedNewsCard =
            (await newsCardsQueryRepository.findNewsCard(id))!;
        const result: NewsCardView = {
            id,
            title: updatedNewsCard.title,
            img: updatedNewsCard.img,
            date: updatedNewsCard.date,
            description: updatedNewsCard.description,
        };
        res.json(result);
    },
);

newsCardsRouter.delete('/:id', async (req: RequestWithParams<WithId>, res) => {
    const result = await newsCardsService.deleteNewsCard(req.params.id);
    if (result) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});
