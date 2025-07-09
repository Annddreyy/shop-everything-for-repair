import { ObjectId } from 'mongodb';
import { ProductCardsModel } from '../db';
import { IPromotionCardView } from '../../../routes/promotionCards.routes';
import { IPromotionCardDB } from './promotionCards.repository';

export const promotionCardsQueryRepository = {
    async findPromotionCards(
        page: number,
        size: number,
    ): Promise<{ promotions: IPromotionCardView[]; pagesCount: number }> {
        const promotionsCount = await ProductCardsModel.countDocuments();
        const promotionsDB = await ProductCardsModel.find()
            .skip(size * (page - 1))
            .limit(size)
            .lean();

        const promotions: IPromotionCardView[] = promotionsDB.map((promotion) =>
            convertType(promotion),
        );

        return {
            promotions,
            pagesCount: Math.ceil(promotionsCount / size),
        };
    },

    async findPromotionCard(
        id: string,
    ): Promise<IPromotionCardView | undefined> {
        const promotionCardDB = await ProductCardsModel.find({
            _id: new ObjectId(id),
        }).lean();

        if (promotionCardDB) {
            const promotionCard = promotionCardDB[0];
            return convertType(promotionCard);
        }
    },
};

function convertType(promotionCardDB: any): IPromotionCardView {
    return {
        id: promotionCardDB._id.toHexString(),
        title: promotionCardDB.title,
        backgroundImg: promotionCardDB.backgroundImg ?? promotionCardDB.img,
        promotionPercent: promotionCardDB.promotionPercent,
    };
}
