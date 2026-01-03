import { FAQModel } from '@/internal/infrastructure/db/models';
import { FAQ } from './faq';

export const FAQRepository = {
    async getFAQs() {
        const faq = await FAQModel.find().lean<WithMongoId<FAQ>[]>();
        return faq.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
    },

    async getFAQ(id: string) {
        const faq = await FAQModel.find({ _id: id }).lean<WithMongoId<FAQ>[]>();
        return faq.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
    },

    async createFAQ({ answer, question }: WithoutId<FAQ>) {
        const result = await FAQModel.insertOne({ answer, question });
        return result._id.toString();
    },

    async updateFAQ({ id, update }: Update<FAQ>) {
        const result = await FAQModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.upsertedId;
    },

    async deleteFAQ(id: string) {
        const result = await FAQModel.deleteOne({ _id: id });
        return result.deletedCount ? id : null;
    },
};
