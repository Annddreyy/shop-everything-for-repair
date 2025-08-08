export interface Email {
    to: string;
    subject: string;
    html: string;
}

export type ConfirmationEmail = {
    to: string;
    code: string;
};
