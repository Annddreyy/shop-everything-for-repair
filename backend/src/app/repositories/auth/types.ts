export interface UserAccountDB {
    _id: ObjectId;
    accountData: {
        userName: string;
        passwordSalt: string;
        passwordHash: string;
        email: string;
        createdAt: Date;
    };
    emailConfirmation: {
        confirmationCode: string;
        expirationDate: Date;
        isConfirmed: boolean;
    };
}

export type UserAccountDBWithoutId = WithoutId<UserAccountDB>;
