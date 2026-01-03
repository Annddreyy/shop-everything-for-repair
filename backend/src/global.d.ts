import { Expose, Type } from 'class-transformer';
import { Request, Response } from 'express';
import { ObjectId as MongoObjectId } from 'mongodb';

declare global {
    const ObjectId: typeof MongoObjectId;

    type WithId = {
        id: string;
    };

    type Update<T> = WithId & {
        update: Partial<T>;
    };

    type WithoutId<T> = Omit<T, 'id'>;
    type WithMongoId<T> = Omit<T, 'id'> & { _id: string };

    type RequestWithParams<T> = Request<T>;
    type RequestWithBody<T> = Request<object, object, T>;
    type RequestWithQuery<T> = Request<object, object, object, T>;
    type RequestWithParamsAndBody<T, K> = Request<T, object, K>;

    type BaseResponse<T> = Response<BaseResponseClass<T>>;

    class BaseResponseClass<T> {
        @Expose()
        status: 'success' | 'error';

        @Expose()
        @Type(() => Object)
        data?: T;

        @Expose()
        messages?: string[];

        constructor(
            status: 'success' | 'error',
            data?: T,
            messages?: string[],
        ) {
            this.status = status;
            if (data) this.data = data;
            if (messages) this.messages = messages;
        }

        static success<T>(data: T): BaseResponse<T> {
            return new BaseResponse<T>('success', data);
        }

        static error(messages: string | string[]): BaseResponse<undefined> {
            const msgs = Array.isArray(messages) ? messages : [messages];
            return new BaseResponse<undefined>('error', undefined, msgs);
        }
    }
}

export {};
