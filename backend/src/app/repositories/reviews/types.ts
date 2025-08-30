export interface ReviewDB {
    _id: ObjectId;
    date: Date;
    text: string;
    images: string[];
}

export type ReviewDBWithoutId = Omit<ReviewDB, '_id'>;
