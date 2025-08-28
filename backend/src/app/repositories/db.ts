import { MongoClient } from 'mongodb';
import mongoose, { Schema } from 'mongoose';
import { settings } from '@/settings';
import { UserAccountDB } from './auth/types';

const mongoUri = settings.MONGO_URI;

export const client = new MongoClient(mongoUri);
export const db = client.db('shop-everything-for-repair');

export const usersCollection = db.collection<UserAccountDB>('users');
// export const promotionCardsCollection =
//     db.collection<IPromotionCardDB>('promotion_cards');
// export const usersCollection = db.collection<IUserAccountDB>('users');

mongoose.set('debug', true);

const NewsCardsSchema = new Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
});

export const NewsCardsModel = mongoose.model('news_cards', NewsCardsSchema);

const ProductCardsSchema = new Schema(
    {
        title: { type: String, required: true },
        price: { type: Number, required: true },
        promotionPercent: { type: Number, required: true },
        img: { type: String, required: true },
        article: { type: String, required: true },
        statuses: { type: [String], default: [] },
    },
    { collection: 'product_cards' },
);

export const ProductCardsModel = mongoose.model(
    'ProductCards',
    ProductCardsSchema,
    'product_cards',
);

const PromotionCardsSchema = new Schema({
    title: { type: String, required: true },
    promotionPercent: { type: Number, required: true },
    backgroundImg: { type: String, required: true },
});

export const PromotionCardsModel = mongoose.model(
    'promotion_cards',
    PromotionCardsSchema,
);

export async function runDb() {
    try {
        await mongoose.connect(mongoUri + '/shop-everything-for-repair');
        console.log('Current DB:', mongoose.connection.name);
        console.log('Connected successfully to mongo server');
    } catch {
        console.log("Can't connect to db");
        await mongoose.disconnect();
    }
}
