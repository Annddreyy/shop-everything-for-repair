import express, { Response } from 'express';
import { NewsCardsGetRequestModel } from '../model/news_card/NewsCardsGetRequestModel';
import { NewsCardsGetResponseModel } from '../model/news_card/NewsCardsGetResponseModel';
import { newsCardsRepository } from '../repositories/newsCardsRepository';
import { RequestWithQuery } from '../types';

export const newsRouter = express.Router();

newsRouter.get(
    '/',
    async (
        req: RequestWithQuery<NewsCardsGetRequestModel>,
        res: Response<NewsCardsGetResponseModel>,
    ) => {
        const { news: newsResponse, pagesCount } = await newsCardsRepository.findNewsCards({
            page: +req.query.page,
            size: +req.query.size,
        });

        const news = newsResponse.map(({ _id, ...product }) => ({
            ...product,
            id: _id.toString(),
        }));

        res.json({ news, pagesCount });
    },
);
