import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import { add } from 'date-fns/add';
import { emailAdapter } from '@/internal/infrastructure/email';
import { logger } from '@/internal/pkg/logger';
import { User, UserRole } from './user';
import { userRepository } from './repository';

const EXPIRATION_DATE_HOURS = 1;
const EXPIRATION_DATE_MINUTES = 30;

export const userService = {
    async createUser(
        user: Omit<
            WithoutId<User>,
            'jwtData' | 'emailConfirmation' | 'role' | 'createdAt'
        >,
    ) {
        const passwordSalt = await bcrypt.genSalt(10);
        const passwordHash = await this._generateHash({
            password: user.password,
            passwordSalt,
        });
        const createdAt = Date.now();

        const expirationDate = add(new Date(), {
            hours: EXPIRATION_DATE_HOURS,
            minutes: EXPIRATION_DATE_MINUTES,
        }).getTime();

        const emailConfirmation = {
            expirationDate,
            confirmationCode: v4(),
            isConfirmed: false,
        };

        const jwtData = {
            passwordHash,
            passwordSalt,
        };

        const role = UserRole.USER;

        const createResult = userRepository.createUser({
            ...user,
            createdAt,
            role,
            emailConfirmation,
            jwtData,
        });

        try {
            const result = await emailAdapter.sendEmailConfirmationMessage({
                to: user.email,
                code: emailConfirmation.confirmationCode,
            });
            if (!result.accepted) {
                logger.error(
                    `Не удалось отправить письмо на почту: ${user.email}`,
                );
                return null;
            }
            logger.info(`Письмо отправлено на почту: ${user.email}`);
        } catch (error: unknown) {
            logger.error(error);
            return null;
        }

        return createResult;
    },

    async findUserById(id: string) {
        return await userRepository.findUserById(id);
    },

    async checkCredentials({
        email,
        password,
    }: {
        email: string;
        password: string;
    }) {
        const user = await userRepository.findByEmail(email);

        if (!user) {
            return false;
        }

        const passwordHash = await this._generateHash({
            password,
            passwordSalt: user.jwtData.passwordSalt,
        });

        if (user.jwtData.passwordHash !== passwordHash) {
            return false;
        }

        return user;
    },

    async confirmEmail({ email, code }: { email: string; code: string }) {
        const user = await userRepository.findByEmail(email);

        if (!user) {
            return false;
        }

        if (
            user.emailConfirmation.confirmationCode === code &&
            user.emailConfirmation.expirationDate > Date.now()
        ) {
            return await userRepository.updateConfirmation(user.id.toString());
        }

        return false;
    },

    async _generateHash({
        password,
        passwordSalt,
    }: {
        password: string;
        passwordSalt: string;
    }) {
        return await bcrypt.hash(password, passwordSalt);
    },
};
