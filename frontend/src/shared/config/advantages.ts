import {
    payIcon,
    catalogIcon,
    deliveryIcon,
    promotionIcon,
} from '@/shared/assets';
import type { Advantage } from '../types';

export const advantages: Advantage[] = [
    { img: payIcon, description: 'Оплата любым удобным способом' },
    { img: catalogIcon, description: 'Большой выбор товаров в каталоге' },
    { img: deliveryIcon, description: 'Осуществляем быструю доставку' },
    { img: promotionIcon, description: 'Делаем скидки на крупные покупки' },
];
