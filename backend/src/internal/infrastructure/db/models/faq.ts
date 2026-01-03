import mongoose, { Schema } from 'mongoose';

const FAQSchema = new Schema({
    id: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
});

export const FAQModel = mongoose.model('faq', FAQSchema);
