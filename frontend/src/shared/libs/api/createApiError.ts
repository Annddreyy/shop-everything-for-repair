import axios from 'axios';

export const createApiError = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        return {
            status: 'error',
            error: JSON.stringify({
                httpStatus: error.response?.status,
                message: error.message,
                details: error.response?.data,
                url: error.config?.url,
                method: error.config?.method,
            }),
        } as const;
    } else if (error instanceof Error) {
        return {
            status: 'error',
            error: error.message,
        } as const;
    }
    return {
        status: 'error',
        error: String(error),
    } as const;
};
