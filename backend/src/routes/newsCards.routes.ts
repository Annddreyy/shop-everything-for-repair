import express, { Response } from 'express';
import { NewsCardsGetRequestModel } from '../app/model/news_card/newsCardsGetRequest.model';
import { NewsCardsGetResponseModel } from '../app/model/news_card/NewsCardsGetResponse.model';
import { newsCardsQueryRepository } from '../app/repositories/news_cards/newsCardsQuery.repository';
import {
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody,
    RequestWithQuery,
} from '../types';
import { INewsCard, newsCardsService } from '../app/services/newsCards.service';

export const newsRouter = express.Router();

export interface INewsCardViewWithoutID {
    title: string;
    img: string;
    description: string;
    date: Date;
}

export interface INewsCardView extends INewsCardViewWithoutID {
    id: string;
}

newsRouter.get(
    '/',
    async (
        req: RequestWithQuery<NewsCardsGetRequestModel>,
        res: Response<NewsCardsGetResponseModel>,
    ) => {
        const page = +req.query.page;
        const size = +req.query.size;

        const { newsCards, pagesCount } =
            await newsCardsQueryRepository.findNewsCards(page, size);

        res.json({ newsCards, pagesCount });
    },
);

newsRouter.get(
    '/:id',
    async (
        req: RequestWithParams<{ id: string }>,
        res: Response<INewsCardView>,
    ) => {
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

newsRouter.post(
    '/',
    async (
        req: RequestWithBody<INewsCardViewWithoutID>,
        res: Response<{ id: string }>,
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

newsRouter.put(
    '/:id',
    async (
        req: RequestWithParamsAndBody<{ id: string }, INewsCard>,
        res: Response<INewsCardView>,
    ) => {
        const id = await newsCardsService.updateNewsCard(
            req.params.id,
            req.body,
        );
        if (!id) {
            res.sendStatus(400);
            return;
        }

        const updatedNewsCard =
            (await newsCardsQueryRepository.findNewsCard(id))!;
        const result: INewsCardView = {
            id,
            title: updatedNewsCard.title,
            img: updatedNewsCard.img,
            date: updatedNewsCard.date,
            description: updatedNewsCard.description,
        };
        res.json(result);
    },
);

newsRouter.delete(
    '/:id',
    async (req: RequestWithParams<{ id: string }>, res: Response) => {
        const result = await newsCardsService.deleteNewsCard(req.params.id);
        if (result) {
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    },
);
