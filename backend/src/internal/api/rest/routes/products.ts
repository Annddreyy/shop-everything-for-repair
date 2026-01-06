import express from 'express';
import { productController } from '../controllers/product';
import { baseMiddlewareGroup } from '../middlewares';

export const productRouter = express.Router();

productRouter.get(
    '/product-categories',
    productController.getProductCategories,
);

productRouter.get('/', productController.getProducts);
productRouter.get('/:id', productController.getOneProduct);

productRouter.post('/', baseMiddlewareGroup, productController.createProduct);
productRouter.put('/:id', baseMiddlewareGroup, productController.updateProduct);
productRouter.delete(
    '/:id',
    baseMiddlewareGroup,
    productController.deleteProduct,
);

