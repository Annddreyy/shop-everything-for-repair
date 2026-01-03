import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

export const ReviewsSchema = new Schema({
    id: { type: ObjectId, required: true },
    date: { type: Date, required: true },
    text: { type: String, required: true },
    images: { type: Array, required: true, default: [] },
});

export const ReviewsModel = mongoose.model('reviews', ReviewsSchema);
