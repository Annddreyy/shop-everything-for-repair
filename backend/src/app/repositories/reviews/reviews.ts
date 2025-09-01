import { ReviewsModel } from '../db';

type FindReviewsType = {
    page: number;
    size: number;
};

export const reviewsRepository = {
    async findReviews({ page, size }: FindReviewsType) {
        const reviewsCount = await ReviewsModel.countDocuments();
        const reviewsDB = await ReviewsModel.find()
            .skip(size * (page - 1))
            .limit(size)
            .lean();

        return {
            reviewsDB,
            pagesCount: Math.ceil(reviewsCount / size),
        };
    },

    async createReview() {},
};
