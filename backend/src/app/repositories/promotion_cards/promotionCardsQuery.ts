import { ObjectId } from 'mongodb';
import { ProductCardsModel } from '../db';
import { PromotionCardView } from '../../../routes/promotionCards';

type FindPromotionCardType = {
    page: number;
    size: number;
};

export const promotionCardsQueryRepository = {
    async findPromotionCards({ page, size }: FindPromotionCardType): Promise<{
        promotions: PromotionCardView[];
        pagesCount: number;
    }> {
        const promotionsCount = await ProductCardsModel.countDocuments();
        const promotionsDB = await ProductCardsModel.find()
            .skip(size * (page - 1))
            .limit(size)
            .lean();

        const promotions: PromotionCardView[] = promotionsDB.map((promotion) =>
            convertType(promotion),
        );

        return {
            promotions,
            pagesCount: Math.ceil(promotionsCount / size),
        };
    },

    async findPromotionCard(
        id: string,
    ): Promise<PromotionCardView | undefined> {
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
): PromotionCardView {
    return {
        id: (promotionCardDB._id as ObjectId).toHexString(),
        title: promotionCardDB.title as string,
        backgroundImg: (promotionCardDB.backgroundImg ??
            promotionCardDB.img) as string,
        promotionPercent: Number(promotionCardDB.promotionPercent),
    };
}
