import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';

type PromocodeDiscountDTO = BaseResponse<{
    discount: number;
}>;

export const promocodesAPI = {
    async getPromocodeDiscount(promocode: string) {
        let response: PromocodeDiscountDTO;

        try {
            response = (
                await instance.get<PromocodeDiscountDTO>(
                    `/promocode?code=${promocode}`,
                )
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
