import { ObjectId } from 'mongodb';

export interface IUserDB {
    _id: ObjectId;
    userName: string;
    passwordSalt: string;
    passwordHash: string;
    email: string;
    createdAt: Date;
}
