import category1 from './../../../assets/images/category_cards/category1.svg';
import category2 from './../../../assets/images/category_cards/category2.svg';
import category3 from './../../../assets/images/category_cards/category3.svg';
import category4 from './../../../assets/images/category_cards/category4.svg';
import category5 from './../../../assets/images/category_cards/category5.svg';
import category6 from './../../../assets/images/category_cards/category6.svg';
import category7 from './../../../assets/images/category_cards/category7.svg';

export type ProductCategory = {
    title: string;
    img: string;
    link: `/${string}`;
};

export const categories: ProductCategory[] = [
    { title: 'Сантехника', img: category1, link: '/' },
    { title: 'Отделочные материалы', img: category2, link: '/' },
    { title: 'Электротовары', img: category3, link: '/' },
    { title: 'Инструменты', img: category4, link: '/' },
    { title: 'Столярные изделия', img: category5, link: '/' },
    { title: 'Общестроительные материалы', img: category6, link: '/' },
    { title: 'Все для сауны и бани', img: category7, link: '/' },
];
