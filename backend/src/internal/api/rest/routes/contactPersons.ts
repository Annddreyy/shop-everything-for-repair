import express from 'express';
import { contactPersonsController } from '../controllers/contactPersons';

export const contactPersonsRouter = express.Router();

contactPersonsRouter.get('/', contactPersonsController.getContactPersons);
