import express from 'express';
import { emailController } from '../controllers/email';

export const emailRouter = express.Router();

emailRouter.post('/', emailController.sendEmail);
