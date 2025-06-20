import { ObjectId } from 'mongodb';
import { db } from '../db';
import { ProductCardStatus } from '../../services/productCards.service';

interface IProductCardWithoutId {
    title: string;
    price: number;
    promotionPercent?: number;
    img: string;
    article: string;
    statuses: ProductCardStatus[];
}

export interface IProductCardDB extends IProductCardWithoutId {
    _id: ObjectId;
}

const productCardsCollection = db.collection<IProductCardDB>('product_cards');

export const productCardsRepository = {
    async createProductCard({
        title,
        price,
        promotionPercent,
        img,
        article,
        statuses,
    }: IProductCardWithoutId): Promise<string> {
        const productCard: IProductCardWithoutId = {
            title,
            price,
            img,
            article,
            statuses,
        };

        if (promotionPercent) {
            productCard.promotionPercent = promotionPercent;
        }

        const result = await productCardsCollection.insertOne(
            productCard as IProductCardDB,
        );

        return result.insertedId.toString();
    },

    async updateProductCard(
        id: string,
        update: Partial<IProductCardWithoutId>,
    ): Promise<string | undefined> {
        const result = await productCardsCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.upsertedId?.toString();
    },

    async deleteProductCard(id: string): Promise<string | null> {
        const result = await productCardsCollection.deleteOne({
            _id: new ObjectId(id),
        });

        if (result.deletedCount) {
            return id;
        } else {
            return null;
        }
    },
};
