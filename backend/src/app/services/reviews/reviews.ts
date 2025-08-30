import { Review } from './types';

export const reviewsService = {
    async getReviews({ page, count, sortBy }: unknown) {
        console.log(page, count, sortBy);
    },
    async createReview({ author, date, text, images }: Review) {
        console.log(author, date, text, images);
    },
};
