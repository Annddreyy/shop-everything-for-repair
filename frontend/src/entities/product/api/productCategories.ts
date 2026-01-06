import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { ProductCategory } from '../model/useProductCategories';

type ProductCategoryDTO = BaseResponse<{
    productCategories: ProductCategory[];
}>;

export const productCategoriesAPI = {
    async getProductCategories() {
        let response: ProductCategoryDTO;

        try {
            response = (
                await instance.get<ProductCategoryDTO>(
                    '/product/product-categories',
                )
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
