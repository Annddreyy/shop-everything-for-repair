import { ObjectId } from 'mongodb';
import { ProductsModel } from '@/internal/infrastructure/db/models';
import { ProductsDTORequest } from '@/internal/api/rest/dto/product/productDTORequest';
import { Product, ProductCategory } from './product';
import { ProductCategorieModel } from '@/internal/infrastructure/db/models/productCategories';

export const productsRepository = {
    async getProductCategories() {
        const productCategories =
            await ProductCategorieModel.find().lean<
                WithMongoId<ProductCategory>[]
            >();
        return productCategories.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
    },

    async findProducts({
        page,
        size,
        title,
        priceMin,
        priceMax,
    }: ProductsDTORequest) {
        const priceFilter: Record<string, number> = {};
        const filter: { title?: object; price?: object } = {};

        if (priceMin && isFinite(+priceMin)) {
            priceFilter.$gt = +priceMin - 1;
        }

        if (priceMax && isFinite(+priceMax)) {
            priceFilter.$lt = +priceMax + 1;
        }

        if (title) {
            filter.title = { $regex: title, $options: 'i' };
        }

        if (Object.keys(priceFilter).length > 0) {
            filter.price = priceFilter;
        }

        const productsCount = await ProductsModel.countDocuments(filter);
        const products = await ProductsModel.find(filter)
            .skip(size * (page - 1))
            .limit(size)
            .lean<WithMongoId<Product>[]>();

        return {
            products: products.map(({ _id, ...rest }) => ({
                id: _id.toString(),
                ...rest,
            })),
            pagesCount: Math.ceil(productsCount / size),
        };
    },

    async findProduct(id: string) {
        const product = await ProductsModel.findOne({
            _id: new ObjectId(id),
        }).lean<WithMongoId<Product>>();
        return {
            id: product?._id.toString(),
            ...product,
        };
    },

    async createProduct(product: WithoutId<Product>) {
        const result = await ProductsModel.insertOne(product);
        return result._id.toString();
    },

    async updateProduct({ id, update }: Update<WithoutId<Product>>) {
        const result = await ProductsModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.modifiedCount > 0 ? id : null;
    },

    async deleteProduct(id: string) {
        const result = await ProductsModel.deleteOne({
            _id: new ObjectId(id),
        });

        return result.deletedCount ? id : null;
    },
};
