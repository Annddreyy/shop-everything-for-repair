import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const contactPersonsSchema = new Schema({
    id: { type: ObjectId, required: true },
    jobTitle: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String },
});

export const ContactPersonsModel = mongoose.model(
    'contactPersons',
    contactPersonsSchema,
);
