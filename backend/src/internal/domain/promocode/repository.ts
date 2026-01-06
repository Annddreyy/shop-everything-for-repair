import { PromocodesModel } from '@/internal/infrastructure/db/models';

export const promocodesRepository = {
    async findPromocode(code: string) {
        const promocode = await PromocodesModel.findOne({ code });
        if (promocode) {
            return promocode;
        }
    },
};
