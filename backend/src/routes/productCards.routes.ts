import express, { Response } from 'express';
import { ProductCardsGetRequestModel } from '../app/model/product_card/ProductCardsGetRequest.model';
import { ProductCardsGetResponseModel } from '../app/model/product_card/ProductCardsGetResponse.model';
import { productCardsQueryRepository } from '../app/repositories/product_cards/productCardsQuery.repository';
import {
    RequestWithBody,
    RequestWithParams,
    RequestWithParamsAndBody,
    RequestWithQuery,
} from '../types';
import {
    productCardsService,
    ProductCardStatus,
} from '../app/services/productCards.service';

export interface IProductCardViewWithoutID {
    title: string;
    price: number;
    promotionPercent?: number;
    img: string;
    article: string;
    statuses: ProductCardStatus[];
}

export interface IProductCardView extends IProductCardViewWithoutID {
    id: string;
}

export const productsRouter = express.Router();

productsRouter.get(
    '/',
    async (
        req: RequestWithQuery<ProductCardsGetRequestModel>,
        res: Response<ProductCardsGetResponseModel>,
    ) => {
        const { title, price_min, price_max } = req.query;

        let { page, size } = req.query;
        page = +page;
        size = +size;

        const { products, pagesCount } =
            await productCardsQueryRepository.findProductCards(
                page,
                size,
                title,
                price_min,
                price_max,
            );

        res.json({
            products,
            pagesCount,
        });
    },
);

productsRouter.get(
    '/:id',
    async (
        req: RequestWithParams<{ id: string }>,
        res: Response<IProductCardView>,
    ) => {
        const productCard = await productCardsQueryRepository.findProductCard(
            req.params.id,
        );

        if (!productCard) {
            res.sendStatus(404);
            return;
        }
        res.json(productCard);
    },
);

productsRouter.post(
    '/',
    async (
        req: RequestWithBody<IProductCardViewWithoutID>,
        res: Response<{ id: string }>,
    ) => {
        const id = await productCardsService.createProductCard(req.body);
        if (id) {
            res.status(201).json({ id });
            return;
        }
        res.sendStatus(400);
    },
);

productsRouter.put(
    '/:id',
    async (
        req: RequestWithParamsAndBody<
            { id: string },
            IProductCardViewWithoutID
        >,
        res: Response<{ id: string }>,
    ) => {
        const result = await productCardsService.updateProductCard(
            req.params.id,
            req.body,
        );
        if (result) {
            res.json({ id: result });
            return;
        }
        res.sendStatus(400);
    },
);

productsRouter.delete(
    '/:id',
    async (
        req: RequestWithParams<{ id: string }>,
        res: Response<{ id: string }>,
    ) => {
        const id = await productCardsService.deleteProductCard(req.params.id);
        if (id) {
            res.json({ id });
            return;
        }
        res.sendStatus(400);
    },
);
