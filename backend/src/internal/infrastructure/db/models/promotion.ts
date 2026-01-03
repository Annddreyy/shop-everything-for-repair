import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const PromotionsSchema = new Schema({
    id: { type: ObjectId, required: true },
    title: { type: String, required: true },
    promotionPercent: { type: Number, required: true },
    image: { type: String, required: true },
});

export const PromotionsModel = mongoose.model('promotions', PromotionsSchema);
