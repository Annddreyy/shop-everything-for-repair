import express from 'express';
import { jwtService } from '../app/application';
import { authService } from '../app/services';

export const authRouter = express.Router();

authRouter.post(
    '/registration',
    async (
        req: RequestWithBody<{
            login: string;
            email: string;
            password: string;
        }>,
        res,
    ) => {
        const { login, email, password } = req.body;
        const id = await authService.createUser({ login, email, password });
        if (id) {
            res.status(201).json({ id });
        }
        res.sendStatus(400);
    },
);

authRouter.post('/confirm-email', async (req, res) => {
    const result = await authService.confirmEmail({
        code: req.body.code,
        email: req.body.email,
    });
    if (result) {
        res.sendStatus(201);
    } else {
        res.sendStatus(400);
    }
});

authRouter.post('/login', async (req, res) => {
    const user = await authService.checkCredentials({
        loginOrEmail: req.body.loginOrEmail,
        password: req.body.password,
    });

    if (user) {
        const token = await jwtService.createJWT(user);
        res.status(201).send(token);
    } else {
        res.sendStatus(401);
    }
});
