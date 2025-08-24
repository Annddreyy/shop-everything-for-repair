export interface IUserAccount {
    userName: string;
    email: string;
    passwordHash: string;
    passwordSalt: string;
    createdAt: Date;
}

export type CreateUserType = {
    login: string;
    email: string;
    password: string;
};

export type CheckCredentialsType = {
    loginOrEmail: string;
    password: string;
};

export type ConfirmEmailType = {
    code: string;
    email: string;
};

export type GenerateHashType = {
    password: string;
    passwordSalt: string;
};
