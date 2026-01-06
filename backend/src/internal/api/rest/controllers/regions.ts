import type { Request } from 'express';
import { regionsRepository } from '@/internal/domain/region';
import { RegionsDTOResponse } from '../dto/regions';

export const regionsController = {
    async getRegions(_req: Request, res: BaseResponse<RegionsDTOResponse>) {
        const regions = await regionsRepository.getRegions();
        if (regions) {
            res.json({
                status: 'success',
                data: regions,
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Не удалось получить список регионов'],
        });
    },
};
