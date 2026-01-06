import { Request } from 'express';
import { contactPersonsRepository } from '@/internal/domain/contactPerson';
import { ContactPersonsDTOResponse } from '../dto/contactPersons';

export const contactPersonsController = {
    async getContactPersons(
        _req: Request,
        res: BaseResponse<ContactPersonsDTOResponse>,
    ) {
        const contactPersons =
            await contactPersonsRepository.getContactPersons();
        if (contactPersons) {
            res.json({
                status: 'success',
                data: { contactPersons },
            });
            return;
        }
        res.json({
            status: 'error',
            messages: ['Не удалось получить список контактов для связи'],
        });
    },
};
