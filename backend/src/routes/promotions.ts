import express, { Response } from "express";
import { DB } from "../db/db";
import { PromotionCardsGetRequestModel } from "../model/promotion_card/PromotionCardsGetRequestModel";
import { PromotionCardsGetResponseModel } from "../model/promotion_card/PromotionCardsGetResponseModel";
import { RequestWithQuery } from "../types";

export const getPromotionsRouter = (db: DB) => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: RequestWithQuery<PromotionCardsGetRequestModel>,
			res: Response<PromotionCardsGetResponseModel>
		) => {
			let promotions = db.promotions;
			const promotionsCount = promotions.length;

			const { page = 1, size = 1 } = req.query;

			promotions = promotions.slice(size * (page - 1), size * page);

			res.json({
				promotions,
				pagesCount: Math.ceil(promotionsCount / size),
			});
		}
	);

	return router;
};
