import jwt from 'jsonwebtoken';
import { settings } from '../../settings';
import { IUserAccountDB } from '../repositories/auth/auth.repository';

export const jwtService = {
    async createJWT(user: IUserAccountDB) {
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
