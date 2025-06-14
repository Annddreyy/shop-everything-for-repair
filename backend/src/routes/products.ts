import { DB, Product } from "../db/db";
import express, { Request, Response } from "express";

export const getProductsRoute = (db: DB) => {
	const route = express.Router();

	route.get(
		"/",
		(
			req: Request<
				{},
				{},
				{},
				{
					page: number;
					size: number;
					title: string;
					price_min: number;
					price_max: number;
				}
			>,
			res: Response<{
				products: Product[];
				pagesCount: number;
			}>
		) => {
			let allProducts = db.products;

			const { title, price_min, price_max } = req.query;

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
			const products = allProducts.slice(
				req.query.size * (req.query.page - 1),
				req.query.size * req.query.page
			);

			res.json({
				products: products,
				pagesCount: Math.ceil(length / req.query.size),
			});
		}
	);

	return route;
};
