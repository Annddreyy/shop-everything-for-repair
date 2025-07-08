import express, { Response } from 'express';
import { emailAdapter } from '../app/adapters/email.adapter';
import { RequestWithBody } from '../types';

export const emailRouter = express.Router();

emailRouter.post(
    '/',
    async (
        req: RequestWithBody<{ to: string; subject: string; html: string }>,
        res: Response,
    ) => {
        console.log(req.body);
        const { accepted } = await emailAdapter.sendEmail(req.body);
        if (accepted) {
            res.sendStatus(200);
        }
        res.sendStatus(400);
    },
);
