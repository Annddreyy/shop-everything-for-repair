import { NewsCard } from "../../db/db";

export interface NewsCardsGetResponseModel {
	news: NewsCard[];
	pagesCount: number;
}
