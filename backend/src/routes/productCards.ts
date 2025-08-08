import express, { Response } from 'express';
import { plainToClass } from 'class-transformer';
import { productCardsQueryRepository } from '@/app/repositories';
import { productCardsService } from '@/app/services';
import { ProductCardDTORequest, ProductCardDTOResponse } from '@/app/dto';
import { ProductCardStatus } from '@/app/services/product_cards/types';

export interface ProductCardView {
    id: string;
    title: string;
    price: number;
    promotionPercent?: number;
    img: string;
    article: string;
    statuses: ProductCardStatus[];
}

export type ProductCardViewWithoutID = Omit<ProductCardView, 'id'>;

export const productCardsRouter = express.Router();

productCardsRouter.get(
    '/',
    async (
        req: RequestWithQuery<ProductCardDTORequest>,
        res: Response<ProductCardDTOResponse>,
    ) => {
        const { title, price_min, price_max } = req.query;

        let { page, size } = req.query;
        page = +page;
        size = +size;

        const response = await productCardsQueryRepository.findProductCards({
            title,
            page,
            size,
            price_min,
            price_max,
        });

        const productCards = plainToClass(ProductCardDTOResponse, response, {
            excludeExtraneousValues: true,
        });

        res.json(productCards);
    },
);

productCardsRouter.get(
    '/:id',
    async (req: RequestWithParams<WithId>, res: Response<ProductCardView>) => {
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

productCardsRouter.post(
    '/',
    async (
        req: RequestWithBody<ProductCardViewWithoutID>,
        res: Response<WithId>,
    ) => {
        const id = await productCardsService.createProductCard(req.body);
        if (id) {
            res.status(201).json({ id });
            return;
        }
        res.sendStatus(400);
    },
);

productCardsRouter.put(
    '/:id',
    async (
        req: RequestWithParamsAndBody<WithId, ProductCardViewWithoutID>,
        res: Response<WithId>,
    ) => {
        const result = await productCardsService.updateProductCard({
            id: req.params.id,
            update: req.body,
        });
        if (result) {
            res.json({ id: result });
            return;
        }
        res.sendStatus(400);
    },
);

productCardsRouter.delete(
    '/:id',
    async (req: RequestWithParams<WithId>, res: Response<WithId>) => {
        const id = await productCardsService.deleteProductCard(req.params.id);
        if (id) {
            res.json({ id });
            return;
        }
        res.sendStatus(400);
    },
);
