import nodemailer from 'nodemailer';
import { settings } from '@/internal/config';

export interface Email {
    to: string;
    subject: string;
    html: string;
}

export interface ConfirmationEmail {
    to: string;
    code: string;
}

export const emailAdapter = {
    async sendEmail({ to, subject, html }: Email) {
        const transporter = nodemailer.createTransport({
            host: settings.EMAIL_HOST,
            port: Number(settings.EMAIL_PORT),
            secure: false,
            auth: {
                user: settings.EMAIL_SENDER_EMAIL,
                pass: settings.EMAIL_SENDER_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: `${settings.EMAIL_INFO_NAME} <${settings.EMAIL_INFO_EMAIL}>`,
            to,
            subject,
            html,
        });

        const { accepted } = info;
        return { accepted };
    },

    async sendEmailConfirmationMessage({ to, code }: ConfirmationEmail) {
        return await this.sendEmail({
            to,
            subject: 'Подтверждение пароля',
            html: `<p>${code}</p>`,
        });
    },
};
