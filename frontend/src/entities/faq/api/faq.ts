import { gql } from '@apollo/client';
import { apolloClient } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { FAQ } from '../model/useFAQ';

type FaqDTO = BaseResponse<{ faqs: FAQ[] }>;

export const GET_FAQS = gql`
    query GetFAQs {
        faqs {
            id
            question
            answer
        }
    }
`;

export const faqAPI = {
    async getFAQ() {
        let response: FaqDTO;

        try {
            response = (await apolloClient.query<FaqDTO>({ query: GET_FAQS }))
                .data!;
        } catch (error: unknown) {
            return createApiError(error);
        }

        return response;
    },
};
