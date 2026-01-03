import { defineStore } from 'pinia';
import { emailAPI } from '../api/email';

export interface Email {
    to: string;
    subject: string;
    html: string;
}

export const useEmailStore = defineStore('email', {
    state: () => ({
        successSending: false,
        isLoading: false,
        errorMessage: '',
    }),

    actions: {
        async sendEmail(email: Email) {
            this.isLoading = true;
            this.successSending = false;
            this.errorMessage = '';

            const response = await emailAPI.sendEmail(email);
            if (response.status === 'success') {
                this.successSending = true;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
