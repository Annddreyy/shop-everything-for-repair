import { db } from "../db/db";
import { PromotionCardsGetRequestModel } from "../model/promotion_card/PromotionCardsGetRequestModel";

export const promotionCardsRepository = {
	findPromotions({ page = 1, size = 1 }: PromotionCardsGetRequestModel) {
		let promotions = db.promotions;
		const promotionsCount = promotions.length;

		promotions = promotions.slice(size * (page - 1), size * page);

		return {
			promotions,
			pagesCount: Math.ceil(promotionsCount / size),
		};
	},
};
