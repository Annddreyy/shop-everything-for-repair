import { ObjectId, WithoutId } from 'mongodb';

export interface PromotionCardDB {
    _id: ObjectId;
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}

export type PromotionCardDBWithoutID = WithoutId<PromotionCardDB>;
