import { NextFunction, Request, Response } from 'express';
import { jwtService } from '../app/application/jwt.service';

export const authMiddleware = async (
    req: Request,
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
        // @ts-ignore
        req.user = await usersService.findUserById(userId);
        next();
    }
    res.send(401);
};
