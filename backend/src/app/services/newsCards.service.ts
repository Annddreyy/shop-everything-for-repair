import { newsCardsRepository } from '../repositories/news_cards/newsCards.repository';

export interface INewsCard {
    img: string;
    title: string;
    description: string;
    date: Date;
}

export const newsCardsService = {
    async createNewsCard({ img, title, description, date }: INewsCard) {
        const newsCard: INewsCard = { img, title, description, date };
        return await newsCardsRepository.createNewsCard(
            newsCard.img,
            newsCard.title,
            newsCard.description,
            newsCard.date,
        );
    },

    async updateNewsCard(id: string, update: Partial<INewsCard>) {
        return await newsCardsRepository.updateNewsCard(id, update);
    },

    async deleteNewsCard(id: string) {
        return await newsCardsRepository.deleteNewsCard(id);
    },
};
