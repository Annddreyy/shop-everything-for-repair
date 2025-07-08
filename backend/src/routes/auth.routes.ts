import express, { Request, Response } from 'express';
import { jwtService } from '../app/application/jwt.service';
import { authService } from '../app/services/auth.service';
import { RequestWithBody } from '../types';

export const authRouter = express.Router();

authRouter.post(
    '/registration',
    async (
        req: RequestWithBody<{
            login: string;
            email: string;
            password: string;
        }>,
        res: Response,
    ) => {
        const { login, email, password } = req.body;
        const id = await authService.createUser(login, email, password);
        if (id) {
            res.status(201).json({ id });
        }
        res.sendStatus(400);
    },
);

authRouter.post('/confirm-email', async (req: Request, res: Response) => {
    const result = await authService.confirmEmail(
        req.body.code,
        req.body.email,
    );
    if (result) {
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

authRouter.post('/login', async (req: Request, res: Response) => {
    const user = await authService.checkCredentials(
        req.body.loginOrEmail,
        req.body.password,
    );

    if (user) {
        const token = await jwtService.createJWT(user);
        res.status(201).send(token);
    } else {
        res.sendStatus(401);
    }
});
