import type { ProductCard } from '../types';
import {
    instance,
    type AxiosBaseResponse,
    type BaseResponse,
} from '@/shared/api/api';

type AxiosGetProductCardsResponse = AxiosBaseResponse<{
    products: ProductCard[];
    pagesCount: number;
}>;

type GetProductCardsResponse = BaseResponse<{
    products: ProductCard[];
    pagesCount: number;
}>;

export const productCardsAPI = {
    async getProductCards(
        page: number,
        size: number,
    ): Promise<GetProductCardsResponse> {
        try {
            const response = await instance.get<AxiosGetProductCardsResponse>(
                `/product_cards?page=${page}&size=${size}`,
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
