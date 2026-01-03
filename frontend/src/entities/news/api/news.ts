import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { News, NewsType } from '../model/useNews';

type NewsDTO = BaseResponse<{
    news: News[];
    pagesCount: number;
}>;

type NewsDTOCountOfTypes = BaseResponse<{
    news: number;
    tips: number;
    article: number;
    review: number;
}>;

export const newsAPI = {
    async getNews(page = 1, pageSize = 10, type?: NewsType) {
        let response: NewsDTO;
        try {
            response = (
                await instance.get<NewsDTO>(
                    `/news?page=${page}&size=${pageSize}` +
                        (type ? `&type=${type}` : ''),
                )
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },

    async getNewsCountOfTypes() {
        let response: NewsDTOCountOfTypes;

        try {
            response = (
                await instance.get<NewsDTOCountOfTypes>('/news/count-of-types')
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
