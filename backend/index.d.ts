import { Request } from 'express';
import {
    ObjectId as MongoObjectId,
    WithoutId as MongoWithoutId,
} from 'mongodb';

declare global {
    type WithId = {
        id: string;
    };
    type Update<T> = WithId & {
        update: Partial<T>;
    };
    type Delete = string;

    type ObjectId = MongoObjectId;
    type WithoutId<T> = MongoWithoutId<T>;

    type RequestWithParams<T> = Request<T>;
    type RequestWithBody<T> = Request<object, object, T>;
    type RequestWithQuery<T> = Request<object, object, object, T>;
    type RequestWithParamsAndBody<T, K> = Request<T, object, K>;
}

export {};
