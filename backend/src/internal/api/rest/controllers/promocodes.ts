import { promocodesRepository } from '@/internal/domain/promocode/repository';
import { PromocodeDTORequest, PromocodeDTOResponse } from '../dto/promocode';

export const promocodesController = {
    async getPromocode(
        req: RequestWithQuery<PromocodeDTORequest>,
        res: BaseResponse<PromocodeDTOResponse>,
    ) {
        const promocode = await promocodesRepository.findPromocode(
            req.query.code,
        );
        if (promocode) {
            res.json({
                status: 'success',
                data: { discount: promocode.discount },
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Не удалось найти промокод'],
        });
    },
};
