import express, { Response } from "express";
import { PromotionCardsGetRequestModel } from "../model/promotion_card/PromotionCardsGetRequestModel";
import { PromotionCardsGetResponseModel } from "../model/promotion_card/PromotionCardsGetResponseModel";
import { RequestWithQuery } from "../types";
import { promotionCardsRepository } from "../repositories/promotionCardsRepository";

export const getPromotionsRouter = () => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: RequestWithQuery<PromotionCardsGetRequestModel>,
			res: Response<PromotionCardsGetResponseModel>
		) => {
			const { promotions, pagesCount } =
				promotionCardsRepository.findPromotions(req.query);
			res.json({ promotions, pagesCount });
		}
	);

	return router;
};
