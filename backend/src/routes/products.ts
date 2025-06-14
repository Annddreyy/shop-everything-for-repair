import express, { Response } from "express";
import { DB, ProductCard } from "../db/db";
import { ProductCardsGetRequestModel } from "../model/product_card/ProductCardsGetRequestModel";
import { RequestWithQuery } from "../types";
import { ProductCardsGetResponseModel } from "../model/product_card/ProductCardsGetResponseModel";

export const getProductsRouter = (db: DB) => {
	const router = express.Router();

	router.get(
		"/",
		(
			req: RequestWithQuery<ProductCardsGetRequestModel>,
			res: Response<ProductCardsGetResponseModel>
		) => {
			let allProducts = db.products;

			const { page = 1, size = 1, title, price_min, price_max } = req.query;

			if (title) {
				allProducts = allProducts.filter((product) =>
					product.title.includes(title)
				);
			}

			if (price_min) {
				allProducts = allProducts.filter((product) => {
					product.price >= price_min;
				});
			}

			if (price_max) {
				allProducts = allProducts.filter((product) => {
					product.price <= price_max;
				});
			}

			const length = allProducts.length;
			const products = allProducts.slice(size * (page - 1), size * page);

			res.json({
				products: products,
				pagesCount: Math.ceil(length / size),
			});
		}
	);

	return router;
};
