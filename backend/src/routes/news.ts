import { DB } from "../db/db";
import express, { Request, Response } from "express";

export const getNewsRouter = (db: DB) => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: Request<{}, {}, {}, { page: number; size: number }>,
			res: Response
		) => {
			let allNews = db.news;
			const newsCount = db.news.length;

			const { page, size } = req.query;

			allNews = allNews.slice(size * (page - 1), size * page);

			res.json({
				news: allNews,
				pagesCount: Math.ceil(newsCount / size),
			});
		}
	);

    return router;
};
