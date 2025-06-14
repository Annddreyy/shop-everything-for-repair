import axios from 'axios';

export const instance = axios.create({
    baseURL: 'http://localhost:8080',
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
