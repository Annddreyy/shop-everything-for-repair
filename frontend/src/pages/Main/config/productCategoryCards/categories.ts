import type { ProductCategory } from '../../types';
import {
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    category7,
} from '../../assets';

// TODO: Добавить английские названия
export const categories: ProductCategory[] = [
    { title: 'Сантехника', img: category1, link: '/' },
    { title: 'Отделочные материалы', img: category2, link: '/' },
    { title: 'Электротовары', img: category3, link: '/' },
    { title: 'Инструменты', img: category4, link: '/' },
    { title: 'Столярные изделия', img: category5, link: '/' },
    { title: 'Общестроительные материалы', img: category6, link: '/' },
    { title: 'Все для сауны и бани', img: category7, link: '/' },
];
