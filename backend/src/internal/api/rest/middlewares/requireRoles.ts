import { NextFunction, Response } from 'express';
import type { User } from '@/internal/domain/user';
import { UserRole } from '@/internal/domain/user';

type RequireRolesBodyType = {
    user: User;
}

export const requireRolesMiddleware = (roles: UserRole[]) => {
    return async (
        req: RequestWithBody<RequireRolesBodyType>,
        res: Response,
        next: NextFunction,
    ) => {
        if (!req.body.user) {
            res.sendStatus(401);
            return;
        }

        if (!roles.includes(req.body.user.role)) {
            res.sendStatus(403);
            return;
        }

        next();
    };
};
