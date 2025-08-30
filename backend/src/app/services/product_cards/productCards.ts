import { productCardsRepository } from '../../../app/repositories';
import { ProductCard } from './types';

export const productCardsService = {
    async createProductCard({
        title,
        price,
        promotionPercent,
        img,
        article,
        statuses,
    }: ProductCard) {
        const productCard: ProductCard = {
            title,
            price,
            promotionPercent,
            img,
            article,
            statuses,
        };

        if (promotionPercent) {
            productCard.promotionPercent = promotionPercent;
        }

        return await productCardsRepository.createProductCard(productCard);
    },

    async updateProductCard({ id, update }: Update<ProductCard>) {
        return await productCardsRepository.updateProductCard({ id, update });
    },

    async deleteProductCard(id: Delete) {
        return await productCardsRepository.deleteProductCard(id);
    },
};
