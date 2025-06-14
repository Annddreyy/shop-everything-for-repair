import express, { Response } from "express";
import { ProductCardsGetRequestModel } from "../model/product_card/ProductCardsGetRequestModel";
import { ProductCardsGetResponseModel } from "../model/product_card/ProductCardsGetResponseModel";
import { productCardsRepository } from "../repositories/productCardsRepository";
import { RequestWithQuery } from "../types";

export const getProductsRouter = () => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: RequestWithQuery<ProductCardsGetRequestModel>,
			res: Response<ProductCardsGetResponseModel>
		) => {
			const { products, pagesCount } = productCardsRepository.findProducts(
				req.query
			);
			res.json({ products, pagesCount });
		}
	);

	return router;
};
