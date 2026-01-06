import { RegionsModel } from '@/internal/infrastructure/db/models';
import { Region } from './region';

export const regionsRepository = {
    async getRegions() {
        const regions = await RegionsModel.find().lean<WithMongoId<Region>[]>();
        return {
            regions: regions.map(({ _id, ...region }) => ({
                id: _id.toString(),
                ...region,
            })),
        };
    },
};
