import express, { Response } from "express";
import { NewsCardsGetRequestModel } from "../model/news_card/NewsCardsGetRequestModel";
import { NewsCardsGetResponseModel } from "../model/news_card/NewsCardsGetResponseModel";
import { newsCardsRepository } from "../repositories/newsCardsRepository";
import { RequestWithQuery } from "../types";

export const getNewsRouter = () => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: RequestWithQuery<NewsCardsGetRequestModel>,
			res: Response<NewsCardsGetResponseModel>
		) => {
			const { news, pagesCount } = newsCardsRepository.findNewsCards(
				req.query
			);
			res.json({ news, pagesCount });
		}
	);

	return router;
};
