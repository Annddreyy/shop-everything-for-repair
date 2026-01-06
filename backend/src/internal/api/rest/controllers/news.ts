import type { Request } from 'express';
import { News, newsRepository, newsService } from '@/internal/domain/news';
import {
    NewsCreateDTORequest,
    NewsDTORequest,
    NewsDTOResponse,
    NewsTypesCountDTOResponse,
    OneNewsDTOResponse,
    UpdateNewsDTOReponse,
} from '../dto/news';

export const newsController = {
    async getNews(
        req: RequestWithQuery<NewsDTORequest>,
        res: BaseResponse<NewsDTOResponse>,
    ) {
        const page = +req.query.page;
        const size = +req.query.size;
        const type = req.query.type;

        try {
            const { news, pagesCount } = await newsRepository.findNews({
                page,
                size,
                type,
            });

            res.json({
                status: 'success',
                data: { news, pagesCount },
            });
        } catch (error: unknown) {
            res.json({
                status: 'error',
                messages: [String(error)],
            });
        }
    },

    async getOneNews(
        req: RequestWithParams<WithId>,
        res: BaseResponse<OneNewsDTOResponse>,
    ) {
        const news = await newsRepository.findOneNews(req.params.id);

        if (!news) {
            res.json({
                status: 'error',
                messages: ['Новость не найдена'],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { news },
        });
    },

    async createNews(
        req: RequestWithBody<NewsCreateDTORequest>,
        res: BaseResponse<WithId>,
    ) {
        try {
            const id = await newsService.createNews(req.body);
            res.json({
                status: 'success',
                data: { id },
            });
        } catch (err: unknown) {
            res.json({
                status: 'error',
                messages: [String(err)],
            });
        }
    },

    async updateNews(
        req: RequestWithParamsAndBody<WithId, News>,
        res: BaseResponse<UpdateNewsDTOReponse>,
    ) {
        const id = await newsService.updateNews({
            id: req.params.id,
            update: req.body,
        });

        if (!id) {
            res.json({
                status: 'error',
                messages: ['Выбранная новость не была обновлена'],
            });
            return;
        }

        const updatedNewsCard = await newsRepository.findOneNews(id);

        if (updatedNewsCard) {
            res.json({
                status: 'success',
                data: { news: updatedNewsCard },
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Не удалось получить обновленную новость'],
        })
    },

    async getCountOfNewsTypes(
        _req: Request,
        res: BaseResponse<NewsTypesCountDTOResponse>,
    ) {
        const counts = await newsRepository.getCountOfNewsTypes();

        if (counts) {
            res.json({
                status: 'success',
                data: counts,
            });
            return;
        }

        res.json({
            status: 'error',
            messages: ['Ошибка получения количества новостей'],
        });
    },

    async deleteNews(
        req: RequestWithParams<WithId>,
        res: BaseResponse<WithId>,
    ) {
        const id = await newsService.deleteNews(req.params.id);
        if (id) {
            res.json({
                status: 'success',
                data: { id },
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Выбранная новость не была удалена'],
        });
    },
};
