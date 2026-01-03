import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { Brand } from '../model/brands';

type BrandsDTO = BaseResponse<Brand[]>;

export const brandsAPI = {
    async getBrands() {
        let response: BrandsDTO;

        try {
            response = (await instance.get<BrandsDTO>('/brands')).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
