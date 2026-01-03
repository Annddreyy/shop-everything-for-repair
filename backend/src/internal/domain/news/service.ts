import { newsRepository } from './repository';
import { News } from './news';

export const newsService = {
    async createNews({
        img,
        title,
        description,
        dateOfCreation,
        author,
        htmlContent,
        type,
    }: WithoutId<News>) {
        return await newsRepository.createNews({
            img,
            title,
            description,
            dateOfCreation,
            author,
            htmlContent,
            type,
        });
    },

    async updateNews({ id, update }: Update<News>) {
        return await newsRepository.updateNews({ id, update });
    },

    async deleteNews(id: string) {
        return await newsRepository.deleteNews(id);
    },
};
