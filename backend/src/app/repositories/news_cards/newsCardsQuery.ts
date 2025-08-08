import { ObjectId } from 'mongodb';
import { NewsCardsModel } from '../db';
import { FindNewsCardsType, NewsCardDB } from './types';
import { NewsCardView } from '@/routes/newsCards';

export const newsCardsQueryRepository = {
    async findNewsCards({ page, size }: FindNewsCardsType) {
        const newsCardsCount = await NewsCardsModel.countDocuments();
        const newsCardsDB = await NewsCardsModel.find()
            .skip(size * (page - 1))
            .limit(size)
            .lean();

        const newsCards: NewsCardView[] = newsCardsDB.map((card) =>
            convertType(card),
        );

        return {
            newsCards,
            pagesCount: Math.ceil(newsCardsCount / size),
        };
    },

    async findNewsCard(id: string): Promise<NewsCardView | undefined> {
        const newsCardDB = await NewsCardsModel.find({
            _id: new ObjectId(id),
        }).lean();

        if (newsCardDB) {
            return convertType(newsCardDB[0]);
        }
    },
};

function convertType(newsCardDb: NewsCardDB): NewsCardView {
    return {
        id: newsCardDb._id.toString(),
        title: newsCardDb.title,
        img: newsCardDb.img,
        description: newsCardDb.description,
        date: newsCardDb.date,
    };
}
