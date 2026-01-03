import PromotionCard from './ui/PromotionCard.vue';
import PromotionsList from './ui/PromotionsList.vue';

export { PromotionCard, PromotionsList };
export { usePromotionsStore } from './model/usePromotions';
export type { Promotion } from './model/usePromotions';
export { promotionsAPI } from './api/promotion';
