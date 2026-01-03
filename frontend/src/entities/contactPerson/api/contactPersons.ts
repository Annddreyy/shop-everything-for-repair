import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { ContactPerson } from '../model/useContactPersons';

type ContactPersonsDTO = BaseResponse<ContactPerson[]>;

export const contactPersonsAPI = {
    async getContactPersons() {
        let response: ContactPersonsDTO;

        try {
            response = (
                await instance.get<ContactPersonsDTO>('/contact-persons')
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
