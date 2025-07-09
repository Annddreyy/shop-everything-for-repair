import { ObjectId } from 'mongodb';
import { IProductCardView } from '../../../routes/productCards.routes';
import { ProductCardStatus } from '../../services/productCards.service';
import { ProductCardsModel } from '../db';

export const productCardsQueryRepository = {
    async findProductCards(
        page: number,
        size: number,
        title: string,
        price_min: number,
        price_max: number,
    ): Promise<{ products: IProductCardView[]; pagesCount: number }> {
        const priceFilter: Record<string, number> = {};
        const filter: { title?: object; price?: object } = {};

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

        const productsCount = await ProductCardsModel.countDocuments(filter);
        const productsDB = await ProductCardsModel.find(filter)
            .skip(size * (page - 1))
            .limit(size)
            .lean();

        const products: IProductCardView[] = productsDB.map((product) =>
            convertType(product),
        );

        return {
            products,
            pagesCount: Math.ceil(productsCount / size),
        };
    },

    async findProductCard(id: string): Promise<IProductCardView | undefined> {
        const productCardDB = await ProductCardsModel.find({
            _id: new ObjectId(id),
        }).lean();

        if (productCardDB) {
            return convertType(productCardDB[0]);
        }
    },
};

function convertType(productCardDB: Record<string, unknown>): IProductCardView {
    return {
        id: (productCardDB._id as ObjectId).toString(),
        title: productCardDB.title as string,
        img: productCardDB.img as string,
        price: productCardDB.price as number,
        promotionPercent: productCardDB.promotionPercent as number,
        article: productCardDB.article as string,
        statuses: (productCardDB.statuses as string[]).map(
            (s) => s as ProductCardStatus,
        ),
    };
}
