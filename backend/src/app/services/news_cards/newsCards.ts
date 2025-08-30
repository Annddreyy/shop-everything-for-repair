import { newsCardsRepository } from '../../../app/repositories';
import { NewsCard } from './types';

export const newsCardsService = {
    async createNewsCard({ img, title, description, date }: NewsCard) {
        const newsCard: NewsCard = { img, title, description, date };
        return await newsCardsRepository.createNewsCard(newsCard);
    },

    async updateNewsCard({ id, update }: Update<NewsCard>) {
        return await newsCardsRepository.updateNewsCard({ id, update });
    },

    async deleteNewsCard(id: Delete) {
        return await newsCardsRepository.deleteNewsCard(id);
    },
};
