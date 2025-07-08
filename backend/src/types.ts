import { Request } from 'express';

export type RequestWithParams<T> = Request<T>;
export type RequestWithBody<T> = Request<object, object, T>;
export type RequestWithQuery<T> = Request<object, object, object, T>;

export type RequestWithParamsAndBody<T, K> = Request<T, object, K>;
