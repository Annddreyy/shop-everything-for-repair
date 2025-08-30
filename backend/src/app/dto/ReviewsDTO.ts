import { Expose } from 'class-transformer';
import { Review } from '../services/reviews/types';

export class ReviewDTORequest {
    @Expose()
    page!: number;
    @Expose()
    size!: number;
}

export class ReviewDTOResponse {
    @Expose()
    reviews!: Review[];
    @Expose()
    pagesCount!: number;
}
