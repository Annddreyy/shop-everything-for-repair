import { Expose } from 'class-transformer';
import { IsArray, IsInt } from 'class-validator';
import type { Product, ProductCategory } from '@/internal/domain/product';

export class ProductsDTOResponse {
    @IsArray()
    @Expose()
    products: Product[] = [];

    @IsInt()
    @Expose()
    pagesCount: number = 1;
}

export class ProductCategoriesDTOResponse {
    @Expose()
    @IsArray()
    productCategories: ProductCategory[] = [];
}

export class ProductDTOResponse {
    @Expose()
    product: Product = {
        id: '1',

        title: '',
        category: '',
        description: '',
        statuses: [],
        characteristics: {},

        count: 0,
        price: 0,
        promotionPercent: 0,

        images: [],
        mainImg: '',

        about: '',
    };
}
