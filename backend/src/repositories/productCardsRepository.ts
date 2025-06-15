import { ProductCard } from '../db/db';
import { ProductCardsGetRequestModel } from '../model/product_card/ProductCardsGetRequestModel';
import { client } from './db';

export const productCardsRepository = {
    async findProducts({
        page = 1,
        size = 1,
        title = '',
        price_min,
        price_max,
    }: ProductCardsGetRequestModel) {
        const priceFilter: Record<string, number> = {};

        if (price_min) {
            priceFilter.$gt = +price_min - 1;
        }

        if (price_max && isFinite(+price_max)) {
            priceFilter.$lt = +price_max + 1;
        }

        const filter: { title: object; price?: object } = {
            title: { $regex: title, $options: 'i' },
        };

        if (Object.keys(priceFilter).length > 0) {
            filter.price = priceFilter;
        }

        const collection = client
            .db('shop-everything-for-repair')
            .collection<ProductCard>('product_cards');

        const productsCount = await collection.countDocuments(filter);
        const products = await collection
            .find(filter)
            .skip(size * (page - 1))
            .limit(size)
            .toArray();

        return {
            products,
            pagesCount: Math.ceil(productsCount / size),
        };
    },
};
