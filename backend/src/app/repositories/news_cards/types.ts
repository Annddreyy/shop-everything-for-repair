export interface NewsCardDB {
    _id: ObjectId;
    img: string;
    title: string;
    description: string;
    date: Date;
}

export type CreateNewsCardsType = {
    img: string;
    title: string;
    description: string;
    date: Date;
};

export type FindNewsCardsType = {
    page: number;
    size: number;
};
