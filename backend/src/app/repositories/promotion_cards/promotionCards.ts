import { ObjectId } from 'mongodb';
import { PromotionCardsModel } from '../db';
import { PromotionCardDB, PromotionCardDBWithoutID } from './types';

export const promotionCardsRepository = {
    async createPromotionCard({
        title,
        promotionPercent,
        backgroundImg,
    }: PromotionCardDBWithoutID): Promise<string> {
        const promotionCard: PromotionCardDBWithoutID = {
            title,
            promotionPercent,
            backgroundImg,
        };
        const result = await PromotionCardsModel.insertOne(promotionCard);
        return result._id.toString();
    },

    async updatePromotionCard({
        id,
        update,
    }: Update<PromotionCardDB>): Promise<string | null> {
        const result = await PromotionCardsModel.updateOne(
            { _id: new ObjectId(id) },
            update,
        );

        return result.upsertedCount ? id : null;
    },

    async deletePromotionCard(id: Delete): Promise<string | null> {
        const result = await PromotionCardsModel.deleteOne({
            _id: new ObjectId(id),
        });

        return result.deletedCount ? id : null;
    },
};
