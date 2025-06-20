import { ObjectId } from 'mongodb';
import { newsCardsCollection } from '../db';

export interface INewsCardDB {
    _id: ObjectId;
    img: string;
    title: string;
    description: string;
    date: Date;
}

export const newsCardsRepository = {
    async createNewsCard(
        img: string,
        title: string,
        description: string,
        date: Date,
    ): Promise<string> {
        const result = await newsCardsCollection.insertOne({
            img,
            title,
            description,
            date,
        } as INewsCardDB);
        return result.insertedId.toString();
    },

    async updateNewsCard(
        id: string,
        update: Partial<INewsCardDB>,
    ): Promise<string | null> {
        const result = await newsCardsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.upsertedCount ? id : null;
    },

    async deleteNewsCard(id: string): Promise<string | null> {
        const result = await newsCardsCollection.deleteOne({
            _id: new ObjectId(id),
        });
        return result.deletedCount ? id : null;
    },
};
