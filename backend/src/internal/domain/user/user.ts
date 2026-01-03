type JwtData = {
    passwordHash: string;
    passwordSalt: string;
};

type EmailConfirmation = {
    confirmationCode: string;
    expirationDate: number;
    isConfirmed: boolean;
};

export enum UserRole {
    ADMIN = 'admin',
    REDACTOR = 'redactor',
    USER = 'user',
}

export interface User {
    id: string;

    surname: string;
    name: string;
    patronymic: string | null;

    email: string;
    password: string;
    phone: string | null;

    createdAt: number;

    jwtData: JwtData;
    emailConfirmation: EmailConfirmation;

    role: UserRole;
}
