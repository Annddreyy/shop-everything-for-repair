import mongoose, { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

const JwtData = new Schema({
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
});

const EmailConfirmation = new Schema({
    confirmationCode: { type: String, required: true },
    expirationDate: { type: Number, required: true },
    isConfirmed: { type: Boolean, required: true },
});

const UserSchema = new Schema({
    id: { type: ObjectId, required: true },

    surname: { type: String, required: true },
    name: { type: String, required: true },
    patronymic: { type: String },

    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },

    createdAt: { type: Number, required: true },

    jwtData: JwtData,
    emailConfirmation: EmailConfirmation,
});

export const UsersModel = mongoose.model('user', UserSchema);
