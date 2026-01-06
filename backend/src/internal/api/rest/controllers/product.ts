import type { Request } from 'express';
import camelcaseKeys from 'camelcase-keys';
import type { Product } from '@/internal/domain/product';
import { productsRepository, productsService } from '@/internal/domain/product';
import {
    ProductCategoriesDTOResponse,
    ProductDTOResponse,
    ProductsDTORequest,
    ProductsDTOResponse,
} from '../dto/product';

export const productController = {
    async getProducts(
        req: RequestWithQuery<ProductsDTORequest>,
        res: BaseResponse<ProductsDTOResponse>,
    ) {
        const { title, priceMin, priceMax } = camelcaseKeys(req.query);

        let { page, size } = req.query;
        page = +page;
        size = +size;

        const response = await productsRepository.findProducts({
            title,
            page,
            size,
            priceMin,
            priceMax,
        });

        if (response) {
            res.json({
                status: 'success',
                data: response,
            });
            return;
        }

        res.json({
            status: 'error',
            messages: ['Товары не найдены'],
        });
    },

    async getOneProduct(
        req: RequestWithParams<WithId>,
        res: BaseResponse<ProductDTOResponse>,
    ) {
        const productCard = await productsRepository.findProduct(req.params.id);

        if (!productCard) {
            res.json({
                status: 'error',
                messages: ['Товар не найден'],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { product: productCard },
        });
    },

    async createProduct(
        req: RequestWithBody<WithoutId<Product>>,
        res: BaseResponse<WithId>,
    ) {
        const id = await productsService.createProduct(req.body);

        if (!id) {
            res.json({
                status: 'error',
                messages: ['Товар не был создан'],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },

    async updateProduct(
        req: RequestWithParamsAndBody<WithId, WithoutId<Product>>,
        res: BaseResponse<WithId>,
    ) {
        const id = await productsService.updateProduct({
            id: req.params.id,
            update: req.body,
        });

        if (!id) {
            res.json({
                status: 'error',
                messages: [`Товар с id: ${req.params.id}`],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },

    async deleteProduct(
        req: RequestWithParams<WithId>,
        res: BaseResponse<WithId>,
    ) {
        const id = await productsService.deleteProduct(req.params.id);

        if (!id) {
            res.json({
                status: 'error',
                messages: [`Не удалось удалить товар с id: ${id}`],
            });
            return;
        }

        res.json({
            status: 'success',
            data: { id },
        });
    },

    async getProductCategories(
        _req: Request,
        res: BaseResponse<ProductCategoriesDTOResponse>,
    ) {
        const productCategories =
            await productsRepository.getProductCategories();

        if (productCategories) {
            res.json({
                status: 'success',
                data: { productCategories },
            });
            return;
        }

        res.json({
            status: 'error',
            messages: ['Категории товаров не найдены'],
        });
    },
};
