import { ObjectId } from 'mongodb';
import { productCardsCollection } from '../db';
import { IProductCardView } from '../../../routes/productCards.routes';
import { IProductCardDB } from './productCards.repository';

export const productCardsQueryRepository = {
    async findProductCards(
        page: number,
        size: number,
        title: string,
        price_min: number,
        price_max: number,
    ): Promise<{ products: IProductCardView[]; pagesCount: number }> {
        const priceFilter: Record<string, number> = {};
        let filter: { title?: object; price?: object } = {};

        if (price_min) {
            priceFilter.$gt = +price_min - 1;
        }

        if (price_max && isFinite(+price_max)) {
            priceFilter.$lt = +price_max + 1;
        }

        if (title) {
            filter.title = { $regex: title, $options: 'i' };
        }

        if (Object.keys(priceFilter).length > 0) {
            filter.price = priceFilter;
        }

        const productsCount =
            await productCardsCollection.countDocuments(filter);
        const productsDB = await productCardsCollection
            .find(filter)
            .skip(size * (page - 1))
            .limit(size)
            .toArray();

        const products: IProductCardView[] = productsDB.map((product) =>
            convertType(product),
        );

        return {
            products,
            pagesCount: Math.ceil(productsCount / size),
        };
    },

    async findProductCard(id: string): Promise<IProductCardView | undefined> {
        const productCardDB = await productCardsCollection
            .find({
                _id: new ObjectId(id),
            })
            .toArray();

        if (productCardDB) {
            return convertType(productCardDB[0]);
        }
    },
};

function convertType(productCardDB: IProductCardDB): IProductCardView {
    return {
        id: productCardDB._id.toString(),
        title: productCardDB.title,
        img: productCardDB.img,
        price: productCardDB.price,
        promotionPercent: productCardDB.promotionPercent,
        article: productCardDB.article,
        statuses: productCardDB.statuses,
    };
}
