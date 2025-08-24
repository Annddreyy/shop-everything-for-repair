import { ObjectId } from 'mongodb';
import { usersCollection } from '../db';
import { UserAccountDB, UserAccountDBWithoutId } from './types';

export const authRepository = {
    async createUser(user: UserAccountDBWithoutId): Promise<string> {
        const _id = new ObjectId();
        await usersCollection.insertOne({
            _id,
            ...user,
        });
        return _id.toString();
    },

    async findByLoginOrEmail(
        loginOrEmail: string,
    ): Promise<UserAccountDB | null> {
        const user = await usersCollection.findOne({
            $or: [{ userName: loginOrEmail }, { email: loginOrEmail }],
        });
        if (user) {
            return user;
        }
        return null;
    },

    async findUserById(id: string): Promise<UserAccountDB | null> {
        const user = await usersCollection.findOne({
            _id: new ObjectId(id),
        });
        if (user) {
            return user;
        }
        return null;
    },

    async updateConfirmation(id: string): Promise<boolean> {
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { 'emailConfirmation.isConfirmed': true } },
        );
        return result.modifiedCount === 1;
    },
};
