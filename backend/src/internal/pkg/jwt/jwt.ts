import jwt from 'jsonwebtoken';
import { settings } from '@/internal/config';
import { User } from '@/internal/domain/user/user';

export const jwtService = {
    async createJWT(user: User) {
        const token = jwt.sign({ userId: user.id }, settings.JWT_SECRET, {
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
