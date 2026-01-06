import { ObjectId } from 'mongodb';
import { NewsModel } from '@/internal/infrastructure/db/models';
import type { News, NewsType } from './news';

export const newsRepository = {
    async createNews({
        img,
        title,
        description,
        dateOfCreation,
        author,
    }: WithoutId<News>) {
        const result = await NewsModel.insertOne({
            img,
            title,
            description,
            dateOfCreation,
            author,
        });
        return result._id.toString();
    },

    async updateNews({ id, update }: Update<News>) {
        const result = await NewsModel.updateOne(
            { _id: new ObjectId(id) },
            { $set: update },
        );
        return result.upsertedCount ? id : null;
    },

    async deleteNews(id: string) {
        const result = await NewsModel.deleteOne({
            _id: new ObjectId(id),
        });
        return result.deletedCount ? id : null;
    },

    async findOneNews(id: string) {
        console.log(id);
        const news = await NewsModel.findOne({ _id: new ObjectId(id) }).lean<
            WithMongoId<News>
        >();

        if (news) {
            return {
                id: news?._id.toString(),
                ...news,
            };
        }
    },

    async findNews({
        page,
        size,
        type,
    }: {
        page: number;
        size: number;
        type?: NewsType;
    }) {
        const newsCount = await NewsModel.countDocuments(type ? { type } : {});
        const news = await NewsModel.find(type ? { type } : {})
            .skip(size * (page - 1))
            .limit(size)
            .lean<WithMongoId<News>[]>();

        return {
            news: news.map(({ _id, ...rest }) => ({
                id: _id.toString(),
                ...rest,
            })),
            pagesCount: Math.ceil(newsCount / size),
        };
    },

    async getCountOfNewsTypes() {
        const counts = await NewsModel.aggregate([
            {
                $group: {
                    _id: '$type',
                    count: { $sum: 1 },
                },
            },
        ]);

        const result = {
            news: 0,
            tips: 0,
            article: 0,
            review: 0,
        };

        counts.forEach((item) => {
            if (item._id in result) {
                result[item._id] = item.count;
            }
        });

        return result;
    },
};
