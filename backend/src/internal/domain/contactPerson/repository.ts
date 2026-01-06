import { ContactPersonsModel } from '@/internal/infrastructure/db/models';
import { ContactPerson } from './contactPerson';

export const contactPersonsRepository = {
    async getContactPersons() {
        const contactPersons =
            await ContactPersonsModel.find().lean<
                WithMongoId<ContactPerson>[]
            >();
        return contactPersons.map(({ _id, ...contactPerson }) => ({
            id: _id.toString(),
            ...contactPerson,
        }));
    },
};
