import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const advantagesSchema = new Schema({
    id: { type: ObjectId, required: true },
    img: { type: String, required: true },
    description: { type: String },
});

export const AdvantagesModel = mongoose.model('advantages', advantagesSchema);
