import {
    instance,
    type AxiosBaseResponse,
    type BaseResponse,
} from '@/shared/api/api';
import type { NewsCard } from '../types';

type AxiosGetNewsCardsResponse = AxiosBaseResponse<{
    newsCards: NewsCard[];
    pagesCount: number;
}>;

type GetNewsCardsResponse = BaseResponse<{
    newsCards: NewsCard[];
    pagesCount: number;
}>;

export const newsCardsAPI = {
    async getNewsCards(
        page: number,
        pageSize: number,
    ): Promise<GetNewsCardsResponse> {
        try {
            const response = await instance.get<AxiosGetNewsCardsResponse>(
                `/news_cards?page=${page}&size=${pageSize}`,
            );
            return {
                status: 'success',
                data: response.data.data,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {
                    status: 'error',
                    error: error.message,
                };
            }
            return {
                status: 'error',
                error: String(error),
            };
        }
    },
};
