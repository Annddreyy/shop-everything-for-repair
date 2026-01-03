import ProductCard from './ui/ProductCard/ProductCard.vue';
import ProductCategoryCard from './ui/ProductCategoryCard.vue';
import FavoriteButton from './ui/ProductCard/FavoriteButton/FavoriteButton.vue';
import CompareButton from './ui/ProductCard/CompareButton/CompareButton.vue';
import CartButton from './ui/ProductCard/CartButton/CartButton.vue';

export {
    ProductCard,
    ProductCategoryCard,
    FavoriteButton,
    CompareButton,
    CartButton,
};
export type { Product } from './model/useProducts';
export type { ProductCategory } from './model/useProductCategories';
export type { Characteristic } from './model/useProduct';
export { productsAPI } from './api/products';
export { useProductStore } from './model/useProduct';
export { useProductsStore } from './model/useProducts';
export { useProductCategoriesStore } from './model/useProductCategories';
