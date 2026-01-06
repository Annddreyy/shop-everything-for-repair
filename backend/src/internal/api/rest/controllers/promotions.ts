import type { Promotion } from '@/internal/domain/promotion';
import {
    promotionsRepository,
    promotionsService,
} from '@/internal/domain/promotion';
import { PromotionDTOResponse, PromotionsDTORequest, PromotionsDTOResponse } from '../dto/promotion';

export const promotionsController = {
    async getPromotions (
        req: RequestWithQuery<PromotionsDTORequest>,
        res: BaseResponse<PromotionsDTOResponse>,
    ) {
        const page = +req.query.page;
        const size = +req.query.size;

        const response = await promotionsRepository.findPromotions({
            page,
            size,
        });

        if (!response) {
            res.json({
                status: 'error',
                messages: ['Акции не были найдены'],
            });
            return;
        }
        res.json({
            status: 'success',
            data: response,
        });
    },

    async getPromotion (
        req: RequestWithParams<WithId>,
        res: BaseResponse<PromotionDTOResponse>,
    ) {
        const promotion = await promotionsRepository.findPromotion(
            req.params.id,
        );

        if (!promotion) {
            res.json({
                status: 'error',
                messages: [`Акция c id: ${req.params.id}`],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { promotion },
        });
    },

    async createPromotion(
        req: RequestWithBody<WithoutId<Promotion>>,
        res: BaseResponse<WithId>,
    ) {
        const id = await promotionsService.createPromotion(req.body);

        if (!id) {
            res.json({
                status: 'error',
                messages: ['Не удалось создать акцию'],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },

    async updatePromotion (
        req: RequestWithParamsAndBody<WithId, WithoutId<Promotion>>,
        res: BaseResponse<WithId>,
    ) {
        const id = await promotionsService.updatePromotion({
            id: req.params.id,
            update: req.body,
        });

        if (!id) {
            res.json({
                status: 'error',
                messages: [`Не удалось обновить акцию с id: ${req.params.id}`],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },

    async deletePromotion (
        req: RequestWithParams<WithId>,
        res: BaseResponse<WithId>,
    ) {
        const id = await promotionsService.deletePromotion(req.params.id);

        if (!id) {
            res.json({
                status: 'error',
                messages: [`Не удалось удалить акцию с id: ${req.params.id}`],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },
};
