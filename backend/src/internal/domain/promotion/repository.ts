import { PromotionsModel } from '@/internal/infrastructure/db/models';
import { Promotion } from './promotion';
import { Product } from '../product';

export const promotionsRepository = {
    async createPromotion(promotion: WithoutId<Promotion>) {
        const result = await PromotionsModel.insertOne(promotion);
        return result._id.toString();
    },

    async updatePromotion({ id, update }: Update<Product>) {
        const result = await PromotionsModel.updateOne(
            { _id: new ObjectId(id) },
            update,
        );

        return result.upsertedCount ? id : null;
    },

    async deletePromotionCard(id: string) {
        const result = await PromotionsModel.deleteOne({
            _id: new ObjectId(id),
        });

        return result.deletedCount ? id : null;
    },

    async findPromotions({ page, size }: { page: number; size: number }) {
        const promotionsCount = await PromotionsModel.countDocuments();
        const promotions = await PromotionsModel.find()
            .skip(size * (page - 1))
            .limit(size)
            .lean<WithMongoId<Promotion>[]>();

        return {
            promotions: promotions.map(({ _id, ...rest }) => ({
                id: _id.toString(),
                ...rest,
            })),
            pagesCount: Math.ceil(promotionsCount / size),
        };
    },

    async findPromotion(id: string) {
        const promotions = await PromotionsModel.find({
            _id: new ObjectId(id),
        }).lean<WithMongoId<Promotion>[]>();
        return promotions.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
    },
};
