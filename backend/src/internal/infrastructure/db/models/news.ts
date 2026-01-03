import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const NewsSchema = new Schema({
    id: { type: ObjectId, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateOfCreation: { type: Date, required: true },
    author: { type: String, required: true },
});

export const NewsModel = mongoose.model('news', NewsSchema, 'news');
