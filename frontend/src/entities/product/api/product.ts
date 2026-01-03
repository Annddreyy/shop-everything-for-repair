import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { Product } from '../model/useProduct';

type ProductDTO = BaseResponse<Product[]>;

export const productAPI = {
    async getProductInformation(id: string) {
        let response: ProductDTO;

        try {
            response = (await instance.get<ProductDTO>(`/product/${id}`)).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
