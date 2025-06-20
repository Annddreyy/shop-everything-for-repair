import express, { Request, Response } from 'express';
import { jwtService } from '../app/application/jwt.service';
import { usersService } from '../app/services/user.service';

export const authRouter = express.Router();

authRouter.post('/login', async (req: Request, res: Response) => {
    const user = await usersService.checkCredentials(
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
