import { productCardsRepository } from '../repositories/product_cards/productCards.repository';

export type ProductCardStatus = 'хит' | 'новинка' | 'распродажа';

export interface IProductCard {
    title: string;
    price: number;
    promotionPercent?: number;
    img: string;
    article: string;
    statuses: ProductCardStatus[];
}

export const productCardsService = {
    async createProductCard({
        title,
        price,
        promotionPercent,
        img,
        article,
        statuses,
    }: IProductCard) {
        const productCard: IProductCard = {
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

    async updateProductCard(id: string, update: Partial<IProductCard>) {
        return await productCardsRepository.updateProductCard(id, update);
    },

    async deleteProductCard(id: string) {
        return await productCardsRepository.deleteProductCard(id);
    },
};
