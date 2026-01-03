import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const ProductsSchema = new Schema({
    id: { type: ObjectId, required: true },

    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    statuses: {
        type: [String],
        enum: ['хит', 'новинка', 'распродажа'],
        default: [],
    },
    characteristics: { type: Map, of: String },

    price: { type: Number, required: true },
    promotionPercent: { type: Number },

    images: { type: [String], default: [] },
    mainImg: { type: String, required: true },
});

export const ProductsModel = mongoose.model('products', ProductsSchema);
