import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { Email } from '../model/useEmail';

type EmailDTO = BaseResponse<{
    status: 'ok'
}>;

export const emailAPI = {
    async sendEmail(email: Email) {
        let response: EmailDTO;

        try {
            response = (await (instance.post<EmailDTO>('/email', email))).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
