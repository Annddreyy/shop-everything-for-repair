import { defineStore } from 'pinia';
import { contactPersonsAPI } from '../api/contactPersons';

export interface ContactPerson {
    id: string;
    jobTitle: string;
    phone: string;
    description?: string;
};

export const useContactPersonsStore = defineStore('contactPersons', {
    state: () => ({
        contactPersons: [] as ContactPerson[],
        errorMesaage: '',
        isLoading: false,
    }),

    actions: {
        async getContactPersons() {
            this.isLoading = true;
            this.errorMesaage = '';

            const response = await contactPersonsAPI.getContactPersons();
            if (response.status === 'success') {
                this.contactPersons = response.data.contactPersons;
            } else {
                this.errorMesaage = response.error;
            }

            this.isLoading = false;
        },
    },
});
