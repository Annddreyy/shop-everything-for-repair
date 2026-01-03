import { NextFunction, Response } from 'express';
import { User, userService } from '@/internal/domain/user';
import { jwtService } from '@/internal/pkg/jwt';

type AuthMiddlewareRequestBody = {
    user: User;
}

export const authMiddleware = async (
    req: RequestWithBody<AuthMiddlewareRequestBody>,
    res: Response,
    next: NextFunction,
) => {
    if (!req.headers.authorization) {
        res.sendStatus(401);
        return;
    }

    const token = req.headers.authorization.split(' ')[1];
    const userId = await jwtService.getUserIdByToken(token);

    if (userId) {
        req.body.user = (await userService.findUserById(userId)) as User;
        next();
        return;
    }

    res.send(401);
};
