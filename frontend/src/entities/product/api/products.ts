import { createApiError } from '@/shared/libs/api';
import { instance } from '@/shared/api';
import type { Product } from '../model/useProducts';

type ProductCardsDTO = BaseResponse<{
    products: Product[];
    pagesCount: number;
}>;

export const productsAPI = {
    async getProduct(page = 1, size = 10) {
        let response: ProductCardsDTO;

        try {
            response = (
                await instance.get<ProductCardsDTO>(
                    `/product?page=${page}&size=${size}`,
                )
            ).data;
        } catch (error: unknown) {
            return createApiError(error);
        }

        return response;
    },
};
