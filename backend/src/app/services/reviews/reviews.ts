import { reviewsRepository } from '../../repositories/reviews/reviews';
import { Review } from './types';

export const reviewsService = {
    async getReviews({ page, size }: unknown) {
        return await reviewsRepository.findReviews({ page, size });
    },
    async createReview({ author, date, text, images }: Review) {
        console.log(author, date, text, images);
    },
};
