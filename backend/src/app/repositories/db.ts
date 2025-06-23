import mongoose, { Schema } from 'mongoose';
import { settings } from '../../settings';
import { IUserAccountDB } from './auth/auth.repository';
import { INewsCardDB } from './news_cards/newsCards.repository';
import { IProductCardDB } from './product_cards/productCards.repository';
import { IPromotionCardDB } from './promotion_cards/promotionCards.repository';

const mongoUri = settings.MONGO_URI;

// export const db = client.db('shop-everything-for-repair');

// export const productCardsCollection =
//     db.collection<IProductCardDB>('product_cards');
// export const promotionCardsCollection =
//     db.collection<IPromotionCardDB>('promotion_cards');
// export const usersCollection = db.collection<IUserAccountDB>('users');

const NewsCardsSchema = new Schema({
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
});

export const NewsCardsModel = mongoose.model('news_cards', NewsCardsSchema);

const ProductCardsSchema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    promotionPercent: { type: Number, required: true },
    img: { type: String, required: true },
    article: { type: String, required: true },
    statuses: {
        type: [String],
        enum: ['хит', 'новинка', 'распродажа'],
        required: true,
    },
});

export const ProductCardsModel = mongoose.model(
    'product_cards',
    ProductCardsSchema,
);

const PromotionCardsSchema = new Schema({
    title: { type: String, required: true },
    promotionPercent: { type: Number, required: true },
    backgroundImg: { type: String, required: true },
});

export const PromotionCardsModel = mongoose.model('promotion_cards', ProductCardsSchema);

export async function runDb() {
    try {
        await mongoose.connect(mongoUri + '/' + 'shop-everything-for-repair');
        console.log('Connected successfully to mongo server');
    } catch {
        console.log("Can't connect to db");
        await mongoose.disconnect();
    }
}
