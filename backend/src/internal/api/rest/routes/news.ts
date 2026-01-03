import express from 'express';
import { newsController } from '../controllers/news';
import { baseMiddlewareGroup } from '../middlewares';

export const newsRouter = express.Router();

newsRouter.get('/', newsController.getNews);
newsRouter.get('/:id', newsController.getOneNews);

newsRouter.post('/', baseMiddlewareGroup, newsController.createNews);
newsRouter.put('/:id', baseMiddlewareGroup, newsController.updateNews);
newsRouter.delete('/:id', baseMiddlewareGroup, newsController.deleteNews);

newsRouter.get('/count-of-types', newsController.getCountOfNewsTypes);
