import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const regionsSchema = new Schema({
    id: { type: ObjectId, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
});

export const RegionsModel = mongoose.model('regions', regionsSchema);
