import bcrypt from 'bcrypt';
import { IUserDB, userRepository } from '../repositories/user/user.repository';

export interface IUser {
    userName: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
}

export const usersService = {
    async createUser(
        login: string,
        email: string,
        password: string,
    ): Promise<string> {
        const passwordSalt = await bcrypt.genSalt(10);
        const passwordHash = await this._generateHash(password, passwordSalt);
        const newUser: IUser = {
            userName: login,
            email,
            passwordHash,
            passwordSalt,
            createdAt: new Date(),
        };

        return userRepository.createUser(newUser);
    },

    async findUserById(id: string): Promise<IUserDB | null> {
        return await userRepository.fundUserById(id);
    },

    async checkCredentials(loginOrEmail: string, password: string) {
        const user = await userRepository.findByLoginOrEmail(loginOrEmail);
        if (!user) {
            return false;
        }

        const passwordHash = await this._generateHash(
            password,
            user.passwordSalt,
        );
        if (user.passwordHash !== passwordHash) {
            return false;
        }

        return user;
    },

    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt);
        console.log('hash: ' + hash);
        return hash;
    },
};
