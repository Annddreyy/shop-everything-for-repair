import express, { Response } from "express";
import { DB } from "../db/db";
import { NewsCardsGetRequestModel } from "../model/news_card/NewsCardsGetRequestModel";
import { RequestWithQuery } from "../types";
import { NewsCardsGetResponseModel } from "../model/news_card/NewsCardsGetResponseModel";

export const getNewsRouter = (db: DB) => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: RequestWithQuery<NewsCardsGetRequestModel>,
			res: Response<NewsCardsGetResponseModel>
		) => {
			let allNews = db.news;
			const newsCount = allNews.length;

			const { page = 1, size = 1 } = req.query;

			allNews = allNews.slice(size * (page - 1), size * page);

			res.json({
				news: allNews,
				pagesCount: Math.ceil(newsCount / size),
			});
		}
	);

    return router;
};
