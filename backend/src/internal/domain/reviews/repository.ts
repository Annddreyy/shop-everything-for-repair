import { ReviewsModel } from '@/internal/infrastructure/db/models';
import { Review } from './reviews';

export const reviewsRepository = {
    async findReviews({
        page,
        size,
        sortBy,
    }: {
        page: number;
        size: number;
        sortBy: string;
    }) {
        const reviewsCount = await ReviewsModel.countDocuments();
        const reviews = await ReviewsModel.find()
            .sort(sortBy)
            .skip(size * (page - 1))
            .limit(size)
            .lean<WithMongoId<Review>[]>();

        return {
            reviews: reviews.map(({ _id, ...rest }) => ({
                id: _id.toString(),
                ...rest,
            })),
            pagesCount: Math.ceil(reviewsCount / size),
        };
    },
};
