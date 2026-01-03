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
        const news = await NewsModel.find({ _id: id }).lean<
            WithMongoId<News>[]
        >();
        return news.map(({ _id, ...rest }) => ({
            id: _id.toString(),
            ...rest,
        }));
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
        const news = await NewsModel.find({ type: 'news' }).countDocuments();
        const tips = await NewsModel.find({ type: 'tips' }).countDocuments();
        const article = await NewsModel.find({
            type: 'article',
        }).countDocuments();
        const review = await NewsModel.find({
            type: 'review',
        }).countDocuments();

        return { news, tips, article, review };
    },
};
