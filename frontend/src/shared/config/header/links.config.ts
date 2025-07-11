type Link = {
    title: string;
    link: `/${string}`;
};

export const links: Link[] = [
    { title: 'О компании', link: '/about-company' },
    { title: 'Оплата', link: '/payment' },
    { title: 'Доставка', link: '/delivery' },
    { title: 'Возврат', link: '/return' },
    { title: 'Отзывы', link: '/reviews' },
    { title: 'Вопрос-ответ', link: '/questions' },
    { title: 'Новости', link: '/news' },
    { title: 'Контакты', link: '/contacts' },
];
