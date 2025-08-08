import { promotionCardsRepository } from '@/app/repositories';
import { PromotionCard, PromotionCardDBWithoutID } from './types';

export const promotionCardsService = {
    async createPromotionCard({
        title,
        promotionPercent,
        backgroundImg,
    }: PromotionCard) {
        const promotionCard: PromotionCard = {
            title,
            promotionPercent,
            backgroundImg,
        };

        const result =
            await promotionCardsRepository.createPromotionCard(promotionCard);
        return result;
    },

    async updatePromotionCard({
        id,
        update,
    }: Update<PromotionCardDBWithoutID>) {
        return await promotionCardsRepository.updatePromotionCard({
            id,
            update,
        });
    },

    async deletePromotionCard(id: Delete) {
        return await promotionCardsRepository.deletePromotionCard(id);
    },
};
