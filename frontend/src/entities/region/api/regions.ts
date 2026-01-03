import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { Region } from '../model/useRegions';

type RegionsDTO = BaseResponse<Region[]>;

export const regionsAPI = {
    async getRegions() {
        let response: RegionsDTO;

        try {
            response = (await instance.get<RegionsDTO>('/regions')).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
