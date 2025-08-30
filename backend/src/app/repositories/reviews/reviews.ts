type FindReviewsType = {
    page: number;
    size: number;
};

export const reviewsRepository = {
    async findReviews({ page, size }: FindReviewsType) {
        console.log(page, size);
    },

    async createReview() {},
};
