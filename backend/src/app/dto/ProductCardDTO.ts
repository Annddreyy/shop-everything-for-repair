import { ProductCardView } from '../../routes/productCards';
import { Expose } from 'class-transformer';

export class ProductCardDTORequest {
    @Expose()
    page!: number;
    @Expose()
    size!: number;
    @Expose()
    title!: string;
    @Expose()
    price_min!: number;
    @Expose()
    price_max!: number;
}

export class ProductCardDTOResponse {
    @Expose()
    products!: ProductCardView[];
    @Expose()
    pagesCount!: number;
}
