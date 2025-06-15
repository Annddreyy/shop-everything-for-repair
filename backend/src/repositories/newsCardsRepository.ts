import { NewsCard } from '../db/db';
import { NewsCardsGetRequestModel } from '../model/news_card/NewsCardsGetRequestModel';
import { client } from './db';

export const newsCardsRepository = {
    async findNewsCards({ page = 1, size = 1 }: NewsCardsGetRequestModel) {
        const collection = client
            .db('shop-everything-for-repair')
            .collection<NewsCard>('news_cards');

        const newsCount = await collection.countDocuments();
        const news = await collection
            .find()
            .skip(size * (page - 1))
            .limit(size)
            .toArray();

        return {
            news,
            pagesCount: Math.ceil(newsCount / size),
        };
    },
};
