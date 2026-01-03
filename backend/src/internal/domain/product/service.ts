import type { Product } from './product';
import { productsRepository } from './repository';

export const productsService = {
    async createProduct(product: WithoutId<Product>) {
        return await productsRepository.createProduct(product);
    },

    async updateProduct({ id, update }: Update<Product>) {
        return await productsRepository.updateProduct({ id, update });
    },

    async deleteProduct(id: string) {
        return await productsRepository.deleteProduct(id);
    },
};
