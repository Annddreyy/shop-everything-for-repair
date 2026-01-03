import { BrandsModel } from '@/internal/infrastructure/db/models/brands';
import { Brand } from './brand';

export const brandsRepository = {
    async getBrands() {
        const brands = await BrandsModel.find().lean<WithMongoId<Brand>[]>();
        return brands.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
    },
};
