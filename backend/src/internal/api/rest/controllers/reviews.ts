import { reviewsRepository } from '@/internal/domain/reviews';
import { ReviewsDTORequest, ReviewsDTOResponse } from '../dto/reviews';

export const reviewsController = {
    async getReviews (
        req: RequestWithQuery<ReviewsDTORequest>,
        res: BaseResponse<ReviewsDTOResponse>,
    ) {
        const response = await reviewsRepository.findReviews(req.query);

        if (!response) {
            res.json({
                status: 'error',
                messages: ['Отзывы не найдены'],
            });
            return;
        }
        
        res.json({
            status: 'success',
            data: response,
        });
    },
};
