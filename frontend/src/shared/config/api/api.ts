import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // withCredentials: true,
});

export enum ResponseStatuses {
    OK = 200,
    NOT_FOUND = 404,
    SERVER_ERROR = 500,
}

export type BaseResponse<T> = {
    status: ResponseStatuses;
    messages: string[];
    data: T;
};
