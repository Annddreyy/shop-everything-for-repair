import { db } from "../db/db";
import { ProductCardsGetRequestModel } from "../model/product_card/ProductCardsGetRequestModel";

export const productCardsRepository = {
	findProducts({
		page = 1,
		size = 1,
		title,
		price_min,
		price_max,
	}: ProductCardsGetRequestModel) {
		let allProducts = db.products;

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

		return {
			products,
			pagesCount: Math.ceil(length / size),
		};
	},
};
