import {
    IPromotionCardDBWithoutID,
    promotionCardsRepository,
} from '../repositories/promotion_cards/promotionCards.repository';

export interface IPromotionCard {
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}

export const promotionCardsService = {
    async createPromotionCard({
        title,
        promotionPercent,
        backgroundImg,
    }: IPromotionCard) {
        const promotionCard: IPromotionCard = {
            title,
            promotionPercent,
            backgroundImg,
        };

        const result =
            await promotionCardsRepository.createPromotionCard(promotionCard);
        return result;
    },

    async updatePromotionCard(
        id: string,
        update: Partial<IPromotionCardDBWithoutID>,
    ) {
        return await promotionCardsRepository.updatePromotionCard(id, update);
    },

    async deletePromotionCard(id: string) {
        return await promotionCardsRepository.deletePromotionCard(id);
    },
};
