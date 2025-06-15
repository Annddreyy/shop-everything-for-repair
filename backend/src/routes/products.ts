import express, { Response } from 'express';
import { ProductCardsGetRequestModel } from '../model/product_card/ProductCardsGetRequestModel';
import { ProductCardsGetResponseModel } from '../model/product_card/ProductCardsGetResponseModel';
import { productCardsRepository } from '../repositories/productCardsRepository';
import { RequestWithQuery } from '../types';

export const productsRouter = express.Router();

productsRouter.get(
    '/',
    async (
        req: RequestWithQuery<ProductCardsGetRequestModel>,
        res: Response<ProductCardsGetResponseModel>,
    ) => {
        const { products: productsResponse, pagesCount } =
            await productCardsRepository.findProducts({
                ...req.query,
                title: req.query.title,
                size: +req.query.size,
                page: +req.query.page,
            });

        const products = productsResponse.map(({ _id, ...product }) => ({
            ...product,
            id: _id.toString(),
        }));

        res.json({
            products,
            pagesCount,
        });
    },
);
