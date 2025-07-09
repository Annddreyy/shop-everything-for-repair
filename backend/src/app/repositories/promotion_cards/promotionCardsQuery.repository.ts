import { ObjectId } from 'mongodb';
import { IPromotionCardView } from '../../../routes/promotionCards.routes';
import { ProductCardsModel } from '../db';

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

function convertType(
    promotionCardDB: Record<string, unknown>,
): IPromotionCardView {
    return {
        id: (promotionCardDB._id as ObjectId).toHexString(),
        title: promotionCardDB.title as string,
        backgroundImg: (promotionCardDB.backgroundImg ??
            promotionCardDB.img) as string,
        promotionPercent: Number(promotionCardDB.promotionPercent),
    };
}
