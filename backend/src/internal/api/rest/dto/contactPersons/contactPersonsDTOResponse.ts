import { Expose } from 'class-transformer';
import { IsArray } from 'class-validator';
import { ContactPerson } from '@/internal/domain/contactPerson';

export class ContactPersonsDTOResponse {
    @Expose()
    @IsArray()
    contactPersons: ContactPerson[] = [];
}
