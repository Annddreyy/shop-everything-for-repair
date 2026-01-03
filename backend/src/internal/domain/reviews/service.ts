import { Review } from './reviews';

export const reviewsService = {
    async createReview({ author, date, text, images }: Review) {
        console.log(author, date, text, images);
    },
};
