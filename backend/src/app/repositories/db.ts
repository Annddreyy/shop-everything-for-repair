import { MongoClient } from 'mongodb';
import { INewsCardDB } from './news_cards/newsCards.repository';
import { IProductCardDB } from './product_cards/productCards.repository';
import { IPromotionCardDB } from './promotion_cards/promotionCards.repository';
import { settings } from '../../settings';
import { IUserDB } from './user/user.repository';

const mongoUri = settings.MONGO_URI;

export const client = new MongoClient(mongoUri);

export const db = client.db('shop-everything-for-repair');

export const newsCardsCollection = db.collection<INewsCardDB>('news_cards');
export const productCardsCollection =
    db.collection<IProductCardDB>('product_cards');
export const promotionCardsCollection =
    db.collection<IPromotionCardDB>('promotion_cards');
export const usersCollection = db.collection<IUserDB>('users');

export async function runDb() {
    try {
        await client.connect();
        await client.db('products').command({ ping: 1 });
        console.log('Connected successfully to mongo server');
    } catch {
        console.log("Can't connect to db");
        await client.close();
    }
}
