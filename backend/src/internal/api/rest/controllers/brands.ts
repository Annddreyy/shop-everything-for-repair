import type { Request } from 'express';
import { brandsRepository } from '@/internal/domain/brand';
import { BrandsDTOResponse } from '../dto/brands/brandsDTOResponse';

export const brandsController = {
    async getBrands(_: Request, res: BaseResponse<BrandsDTOResponse>) {
        const brands = await brandsRepository.getBrands();
        if (brands) {
            res.json({
                status: 'success',
                data: { brands },
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Бренды не найдены'],
        });
    },
};
