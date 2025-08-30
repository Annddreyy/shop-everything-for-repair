import { Review } from '../services/reviews/types';

export interface ReviewGetRequestModel {
    page: number;
    size: number;
}

export interface ReviewGetResponseModel {
    reviews: Review[];
    pagesCount: number;
}
