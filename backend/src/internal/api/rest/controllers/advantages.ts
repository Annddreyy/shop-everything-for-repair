import type { Request } from 'express';
import { advantagesRepository } from '@/internal/domain/advantage';
import { AdvantagesDTOResponse } from '../dto/advantages';

export const advantagesController = {
    async getAdvantages(
        _req: Request,
        res: BaseResponse<AdvantagesDTOResponse>,
    ) {
        const advantages = await advantagesRepository.getAdvantages();
        if (advantages) {
            res.json({
                status: 'success',
                data: { advantages },
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Преимущества не найдены'],
        });
    },
};
