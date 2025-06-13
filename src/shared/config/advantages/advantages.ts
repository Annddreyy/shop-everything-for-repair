import img1 from './../../../assets/images/advantages/pay.svg';
import img2 from './../../../assets/images/advantages/catalog.svg';
import img3 from './../../../assets/images/advantages/delivery.svg';
import img4 from './../../../assets/images/advantages/promotion.svg';

export type Advantage = {
    img: string;
    description: string;
};
export const advantages: Advantage[] = [
    { img: img1, description: 'Оплата любым удобным способом' },
    { img: img2, description: 'Большой выбор товаров в каталоге' },
    { img: img3, description: 'Осуществляем быструю доставку' },
    { img: img4, description: 'Делаем скидки на крупные покупки' },
];
