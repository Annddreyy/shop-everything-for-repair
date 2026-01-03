import { Promotion } from './promotion';
import { promotionsRepository } from './repository';

export const promotionsService = {
    async createPromotion(promotion: WithoutId<Promotion>) {
        return await promotionsRepository.createPromotion(promotion);
    },

    async updatePromotion({ id, update }: Update<WithoutId<Promotion>>) {
        return await promotionsRepository.updatePromotion({
            id,
            update,
        });
    },

    async deletePromotion(id: string) {
        return await promotionsRepository.deletePromotion(id);
    },
};
