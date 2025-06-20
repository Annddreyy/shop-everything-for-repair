import { ObjectId } from 'mongodb';
import { promotionCardsCollection } from '../db';

export interface IPromotionCardDBWithoutID {
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}

export interface IPromotionCardDB extends IPromotionCardDBWithoutID {
    _id: ObjectId;
}

export const promotionCardsRepository = {
    async createPromotionCard({
        title,
        promotionPercent,
        backgroundImg,
    }: IPromotionCardDBWithoutID): Promise<string> {
        const promotionCard: IPromotionCardDBWithoutID = {
            title,
            promotionPercent,
            backgroundImg,
        };
        const result = await promotionCardsCollection.insertOne(
            promotionCard as IPromotionCardDB,
        );
        return result.insertedId.toString();
    },

    async updatePromotionCard(
        id: string,
        update: Partial<IPromotionCardDB>,
    ): Promise<string | null> {
        const result = await promotionCardsCollection.updateOne(
            { _id: new ObjectId(id) },
            update,
        );

        return result.upsertedCount ? id : null;
    },

    async deletePromotionCard(id: string): Promise<string | null> {
        const result = await promotionCardsCollection.deleteOne({
            _id: new ObjectId(id),
        });

        return result.deletedCount ? id : null;
    },
};
