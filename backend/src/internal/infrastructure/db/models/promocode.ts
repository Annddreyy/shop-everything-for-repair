import mongoose, { Schema } from 'mongoose';

const promocodeSchema = new Schema({
    id: { type: String, required: true },
    code: { type: String, required: true },
    discount: { type: Number, required: true },
});

export const PromocodesModel = mongoose.model('promocodes', promocodeSchema);
