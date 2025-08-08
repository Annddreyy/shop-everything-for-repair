import { ObjectId } from 'mongodb';
import { ProductCardsModel } from '../db';
import { ProductCardDB, ProductCardWithoutId } from './types';

export const productCardsRepository = {
    async createProductCard({
        title,
        price,
        promotionPercent,
        img,
        article,
        statuses,
    }: ProductCardWithoutId): Promise<string> {
        const productCard: ProductCardWithoutId = {
            title,
            price,
            img,
            article,
            statuses,
        };

        if (promotionPercent) {
            productCard.promotionPercent = promotionPercent;
        }

        const result = await ProductCardsModel.insertOne(
            productCard as ProductCardDB,
        );

        return result._id.toString();
    },

    async updateProductCard({
        id,
        update,
    }: Update<ProductCardWithoutId>): Promise<string | undefined> {
        const result = await ProductCardsModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.upsertedId?.toString();
    },

    async deleteProductCard(id: Delete): Promise<string | null> {
        const result = await ProductCardsModel.deleteOne({
            _id: new ObjectId(id),
        });

        if (result.deletedCount) {
            return id;
        } else {
            return null;
        }
    },
};
