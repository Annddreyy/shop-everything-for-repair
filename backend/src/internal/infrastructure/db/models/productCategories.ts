import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const productCategoriesSchema = new Schema({
    id: { type: ObjectId, required: true },
    title: { type: String, required: true },
    img: { type: String, required: true },
    link: { type: String, required: true },
});

export const ProductCategorieModel = mongoose.model(
    'product_categories',
    productCategoriesSchema,
);
