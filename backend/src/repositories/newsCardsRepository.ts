import { db } from "../db/db";
import { NewsCardsGetRequestModel } from "../model/news_card/NewsCardsGetRequestModel";

export const newsCardsRepository = {
	findNewsCards({ page = 1, size = 1 }: NewsCardsGetRequestModel) {
		let news = db.news;
		const newsCount = news.length;

		news = news.slice(size * (page - 1), size * page);

		return {
			news,
			pagesCount: Math.ceil(newsCount / size),
		};
	},
};
