import { ObjectId } from 'mongodb';
import { promotionCardsCollection } from '../db';
import { IPromotionCardView } from '../../../routes/promotionCards.routes';
import { IPromotionCardDB } from './promotionCards.repository';

export const promotionCardsQueryRepository = {
    async findPromotionCards(
        page: number,
        size: number,
    ): Promise<{ promotions: IPromotionCardView[]; pagesCount: number }> {
        const promotionsCount = await promotionCardsCollection.countDocuments();
        const promotionsDB = await promotionCardsCollection
            .find()
            .skip(size * (page - 1))
            .limit(size)
            .toArray();

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
        const promotionCardDB = await promotionCardsCollection
            .find({ _id: new ObjectId(id) })
            .toArray();

        if (promotionCardDB) {
            const promotionCard = promotionCardDB[0];
            return convertType(promotionCard);
        }
    },
};

function convertType(promotionCardDB: IPromotionCardDB): IPromotionCardView {
    return {
        id: promotionCardDB._id.toHexString(),
        title: promotionCardDB.title,
        backgroundImg: promotionCardDB.backgroundImg,
        promotionPercent: promotionCardDB.promotionPercent,
    };
}
