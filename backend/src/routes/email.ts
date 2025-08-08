import express from 'express';
import { emailAdapter } from '@/app/adapters';
import { Email } from '@/app/adapters/email/types';

export const emailRouter = express.Router();

emailRouter.post('/', async (req: RequestWithBody<Email>, res) => {
    const { accepted } = await emailAdapter.sendEmail(req.body);
    if (accepted) {
        res.sendStatus(200);
    }
    res.sendStatus(400);
});
