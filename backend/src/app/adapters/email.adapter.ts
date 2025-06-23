import nodemailer from 'nodemailer';

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
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'andreymail22112006@gmail.com',
                pass: 'ipsz usva jtvz navg',
            },
        });

        let info = await transporter.sendMail({
            from: 'Андрюха <andreymail22112006@gmail.com>',
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
