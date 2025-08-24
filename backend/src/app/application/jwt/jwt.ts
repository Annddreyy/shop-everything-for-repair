import jwt from 'jsonwebtoken';
import { settings } from '@/settings';
import { UserAccountDB } from '@/app/repositories/auth/types';

export const jwtService = {
    async createJWT(user: UserAccountDB) {
        const token = jwt.sign({ userId: user._id }, settings.JWT_SECRET, {
            expiresIn: '1h',
        });
        return token;
    },

    async getUserIdByToken(token: string) {
        try {
            const { userId } = jwt.verify(
                token,
                settings.JWT_SECRET,
            ) as jwt.JwtPayload;
            return userId;
        } catch {
            return null;
        }
    },
};
