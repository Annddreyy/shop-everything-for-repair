import { ObjectId } from 'mongodb';
import { usersCollection } from '../db';

export interface IUserAccountDBWithoutId {
    accountData: {
        userName: string;
        passwordSalt: string;
        passwordHash: string;
        email: string;
        createdAt: Date;
    };
    emailConfirmation: {
        confirmationCode: string;
        expirationDate: Date;
        isConfirmed: boolean;
    };
}

export interface IUserAccountDB extends IUserAccountDBWithoutId {
    _id: ObjectId;
}

export const authRepository = {
    async createUser(user: IUserAccountDBWithoutId) {
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

    async findUserById(id: string) {
        const result = await usersCollection
            .find({ _id: new ObjectId(id) })
            .toArray();
        if (result.length) {
            return result[0];
        }
        return null;
    },

    async updateConfirmation(_id: string) {
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(_id) },
            { $set: { 'emailConfirmation.isConfirmed': true } },
        );
        return result.modifiedCount === 1;
    },
};
