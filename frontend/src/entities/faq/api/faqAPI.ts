import { instance, type AxiosBaseResponse } from '@/shared/api/api';
import type { FAQ } from '../types';

type AxiosGetFAQResponse = AxiosBaseResponse<FAQ[]>;

type GetFAQResponse =
    | {
          status: 'success';
          faq: FAQ[];
      }
    | {
          status: 'error';
          error: string;
      };

export const faqAPI = {
    async getFAQ(): Promise<GetFAQResponse> {
        try {
            const response = await instance.get<AxiosGetFAQResponse>('/faq');
            const faq = response.data.data;
            return {
                status: 'success',
                faq,
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
