import { PromotionCard } from '../db/db';
import { PromotionCardsGetRequestModel } from '../model/promotion_card/PromotionCardsGetRequestModel';
import { client } from './db';

export const promotionCardsRepository = {
    async findPromotions({
        page = 1,
        size = 1,
    }: PromotionCardsGetRequestModel) {
        const collection = client
            .db('shop-everything-for-repair')
            .collection<PromotionCard>('promotion_cards');

        const promotionsCount = await collection.countDocuments();
        const promotions = await collection
            .find()
            .skip(size * (page - 1))
            .limit(size)
            .toArray();

        return {
            promotions,
            pagesCount: Math.ceil(promotionsCount / size),
        };
    },
};
