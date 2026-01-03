import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const brandsSchema = new Schema({
    id: { type: ObjectId, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
});

export const BrandsModel = mongoose.model('brands', brandsSchema);
