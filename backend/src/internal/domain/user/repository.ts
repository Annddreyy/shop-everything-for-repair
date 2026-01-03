import { ObjectId } from 'mongodb';
import { User } from './user';
import { UsersModel } from '@/internal/infrastructure/db/models';

export const userRepository = {
    async createUser(user: WithoutId<User>) {
        const _id = new ObjectId();
        await UsersModel.insertOne({
            _id,
            ...user,
        });
        return _id.toString();
    },

    async findByEmail(loginOrEmail: string) {
        const user = (await UsersModel.findOne({
            email: loginOrEmail,
        })) as User;

        if (user) {
            return user;
        }

        return null;
    },

    async findUserById(id: string) {
        const user = (await UsersModel.findOne({
            _id: new ObjectId(id),
        })) as User;
        if (user) {
            return user;
        }
        return null;
    },

    async updateConfirmation(id: string) {
        const result = await UsersModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: { 'emailConfirmation.isConfirmed': true } },
        );
        return result.modifiedCount === 1;
    },
};
