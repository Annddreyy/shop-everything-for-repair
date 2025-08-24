import nodemailer from 'nodemailer';
import { env } from 'process';
import { ConfirmationEmail, Email } from './types';

export const emailAdapter = {
    async sendEmail({ to, subject, html }: Email) {
        const transporter = nodemailer.createTransport({
            host: env.EMAIL_HOST,
            port: Number(env.EMAIL_PORT),
            secure: false,
            auth: {
                user: env.EMAIL_SENDER_EMAIL,
                pass: env.EMAIL_SENDER_PASSWORD,
            },
        });

        const info = await transporter.sendMail({
            from: `${env.EMAIL_INFO_NAME} <${env.EMAIL_INFO_EMAIL}>`,
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
