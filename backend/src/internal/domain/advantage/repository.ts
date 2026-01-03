import { AdvantagesModel } from '@/internal/infrastructure/db/models/advantages';
import { Advantage } from './advantage';

export const advantagesRepository = {
    async getAdvantages() {
        const advantages =
            await AdvantagesModel.find().lean<WithMongoId<Advantage>[]>();
        return advantages.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
    },
};
