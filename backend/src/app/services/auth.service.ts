import bcrypt from 'bcrypt';
import { authRepository, IUserAccountDB, IUserAccountDBWithoutId } from '../repositories/auth/auth.repository';
import { v4 } from 'uuid';
import { add } from 'date-fns/add';
import { emailAdapter } from '../adapters/email.adapter';

export interface IUserAccount {
    userName: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
}

export const authService = {
    async createUser(
        login: string,
        email: string,
        password: string,
    ): Promise<string | null> {
        const passwordSalt = await bcrypt.genSalt(10);
        const passwordHash = await this._generateHash(password, passwordSalt);

        const newUser: IUserAccountDBWithoutId = {
            accountData: {
                userName: login,
                email,
                passwordHash,
                passwordSalt,
                createdAt: new Date(),
            },
            emailConfirmation: {
                confirmationCode: v4(),
                expirationDate: add(new Date(), {
                    hours: 1,
                    minutes: 3
                }),
                isConfirmed: false
            }
        };
        const createResult = authRepository.createUser(newUser);

        try {
            const result = await emailAdapter.sendEmailConfirmationMessage({ to: newUser.accountData.email, code: newUser.emailConfirmation.confirmationCode });
            if (!result.accepted) {
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }

        return createResult;
    },

    async findUserById(id: string): Promise<IUserAccountDB | null> {
        return await authRepository.findUserById(id);
    },

    async checkCredentials(loginOrEmail: string, password: string) {
        const user = await authRepository.findByLoginOrEmail(loginOrEmail);
        if (!user) {
            return false;
        }

        const passwordHash = await this._generateHash(
            password,
            user.accountData.passwordSalt,
        );
        if (user.accountData.passwordHash !== passwordHash) {
            return false;
        }

        return user;
    },

    async confirmEmail(code: string, email: string): Promise<boolean> {
        const user = await authRepository.findByLoginOrEmail(email);
        if (!user) {
            return false;
        }
        if (user.emailConfirmation.confirmationCode === code && user.emailConfirmation.expirationDate > new Date()) {
            return await authRepository.updateConfirmation(user._id.toString());
        }
        return false;
    },

    async _generateHash(password: string, salt: string) {
        const hash = await bcrypt.hash(password, salt);
        console.log('hash: ' + hash);
        return hash;
    },
};
