import express, { Response } from 'express';
import { ReviewGetRequestModel, ReviewGetResponseModel } from '../app/model';
import { reviewsService } from '../app/services/reviews/reviews';

export interface ReviewsView {
    author: string;
    date: Date;
    text: string;
    images: string;
}

export const reviewRouter = express.Router();

reviewRouter.get(
    '/',
    async (
        req: RequestWithQuery<ReviewGetRequestModel>,
        res: Response<ReviewGetResponseModel>,
    ) => {
        const page = +req.query.page;
        const size = +req.query.size;

        const { reviewsDB, pagesCount } = await reviewsService.getReviews({
            page,
            size,
            sortBy: '',
        });

        res.json({ reviewsDB, pagesCount });
    },
);
