import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { Advantage } from '../model/useAdvantage';

type AdvantageDTO = BaseResponse<Advantage[]>;

export const advantagesAPI = {
    async getAdvantages() {
        let response: AdvantageDTO;

        try {
            response = (await instance.get<AdvantageDTO>('/advantages')).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
