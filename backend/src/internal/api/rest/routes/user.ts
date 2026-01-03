import express from 'express';
import { userController } from '../controllers/user';

export const userRouter = express.Router();

userRouter.post('/registration', userController.registration);
userRouter.post('/confirm-email', userController.confirmEmail);
userRouter.post('/login', userController.login);
