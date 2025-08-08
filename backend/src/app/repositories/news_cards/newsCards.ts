import { ObjectId } from 'mongodb';
import { NewsCardsModel } from '../db';
import { CreateNewsCardsType, NewsCardDB } from './types';

export const newsCardsRepository = {
    async createNewsCard({
        img,
        title,
        description,
        date,
    }: CreateNewsCardsType): Promise<string> {
        const result = await NewsCardsModel.insertOne({
            img,
            title,
            description,
            date,
        });
        return result._id.toString();
    },

    async updateNewsCard({
        id,
        update,
    }: Update<NewsCardDB>): Promise<string | null> {
        const result = await NewsCardsModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.upsertedCount ? id : null;
    },

    async deleteNewsCard(id: Delete): Promise<string | null> {
        const result = await NewsCardsModel.deleteOne({
            _id: new ObjectId(id),
        });
        return result.deletedCount ? id : null;
    },
};
