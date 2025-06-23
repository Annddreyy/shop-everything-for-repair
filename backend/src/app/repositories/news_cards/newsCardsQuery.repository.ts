import { ObjectId } from 'mongodb';
import { NewsCardsModel } from '../db';
import { INewsCardView } from '../../../routes/newsCards.routes';
import { INewsCardDB } from './newsCards.repository';

export const newsCardsQueryRepository = {
    async findNewsCards(
        page: number,
        size: number,
    ): Promise<{
        newsCards: INewsCardView[];
        pagesCount: number;
    }> {
        const newsCardsCount = await NewsCardsModel.countDocuments();
        const newsCardsDB = await NewsCardsModel
            .find()
            .skip(size * (page - 1))
            .limit(size)
            .lean();

        const newsCards: INewsCardView[] = newsCardsDB.map((card) =>
            convertType(card),
        );

        return {
            newsCards,
            pagesCount: Math.ceil(newsCardsCount / size),
        };
    },

    async findNewsCard(id: string): Promise<INewsCardView | undefined> {
        const newsCardDB = await NewsCardsModel
            .find({
                _id: new ObjectId(id),
            })
            .lean();

        if (newsCardDB) {
            return convertType(newsCardDB[0]);
        }
    },
};

function convertType(newsCardDb: INewsCardDB): INewsCardView {
    return {
        id: newsCardDb._id.toString(),
        title: newsCardDb.title,
        img: newsCardDb.img,
        description: newsCardDb.description,
        date: newsCardDb.date,
    };
}
