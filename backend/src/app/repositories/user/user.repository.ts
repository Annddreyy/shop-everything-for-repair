import { ObjectId } from 'mongodb';
import { IUser } from '../../services/user.service';
import { usersCollection } from '../db';

export interface IUserDB {
    _id: ObjectId;
    userName: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
}

export const userRepository = {
    async createUser(user: IUser) {
        const _id = new ObjectId();
        await usersCollection.insertOne({
            _id,
            ...user,
        });
        return _id.toString();
    },

    async findByLoginOrEmail(loginOrEmail: string) {
        const user = await usersCollection
            .find({
                $or: [{ userName: loginOrEmail }, { email: loginOrEmail }],
            })
            .toArray();
        if (user.length) {
            return user[0];
        }
        return null;
    },

    async fundUserById(id: string) {
        const result = await usersCollection
            .find({ _id: new ObjectId(id) })
            .toArray();
        if (result.length) {
            return result[0];
        }
        return null;
    },
};
