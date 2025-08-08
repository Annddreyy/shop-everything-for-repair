import bcrypt from 'bcrypt';
import { authRepository } from '@/app/repositories/auth/auth';
import { v4 } from 'uuid';
import { add } from 'date-fns/add';
import { emailAdapter } from '@/app/adapters/email/email';
import {
    UserAccountDB,
    UserAccountDBWithoutId,
} from '@/app/repositories/auth/types';
import {
    CheckCredentialsType,
    ConfirmEmailType,
    CreateUserType,
    GenerateHashType,
} from './types';

const EXPIRATION_DATE_HOURS = 1;
const EXPIRATION_DATE_MINUTES = 3;

export const authService = {
    async createUser({
        login,
        email,
        password,
    }: CreateUserType): Promise<string | null> {
        const passwordSalt = await bcrypt.genSalt(10);
        const passwordHash = await this._generateHash({
            password,
            passwordSalt,
        });

        const newUser: UserAccountDBWithoutId = {
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
                    hours: EXPIRATION_DATE_HOURS,
                    minutes: EXPIRATION_DATE_MINUTES,
                }),
                isConfirmed: false,
            },
        };

        const createResult = authRepository.createUser(newUser);

        try {
            const result = await emailAdapter.sendEmailConfirmationMessage({
                to: newUser.accountData.email,
                code: newUser.emailConfirmation.confirmationCode,
            });
            if (!result.accepted) {
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }

        return createResult;
    },

    async findUserById(id: string): Promise<UserAccountDB | null> {
        return await authRepository.findUserById(id);
    },

    async checkCredentials({ loginOrEmail, password }: CheckCredentialsType) {
        const user = await authRepository.findByLoginOrEmail(loginOrEmail);
        if (!user) {
            return false;
        }

        const passwordHash = await this._generateHash({
            password,
            passwordSalt: user.accountData.passwordSalt,
        });
        if (user.accountData.passwordHash !== passwordHash) {
            return false;
        }

        return user;
    },

    async confirmEmail({ code, email }: ConfirmEmailType): Promise<boolean> {
        const user = await authRepository.findByLoginOrEmail(email);
        if (!user) {
            return false;
        }
        if (
            user.emailConfirmation.confirmationCode === code &&
            user.emailConfirmation.expirationDate > new Date()
        ) {
            return await authRepository.updateConfirmation(user._id.toString());
        }
        return false;
    },

    async _generateHash({ password, passwordSalt }: GenerateHashType) {
        const hash = await bcrypt.hash(password, passwordSalt);
        return hash;
    },
};
