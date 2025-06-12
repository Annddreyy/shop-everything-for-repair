type Link = {
    title: string;
    link: `/${string}`;
};

type LinksCategory = {
    category: string;
    links: Link[];
};

export const links: LinksCategory[] = [
    {
        category: 'Информация',
        links: [
            { title: 'О компании', link: '/about-company' },
            { title: 'Оплата', link: '/payment' },
            { title: 'Доставка', link: '/delivery' },
            { title: 'Возврат', link: '/return' },
            { title: 'Отзывы', link: '/reviews' },
            { title: 'Вопрос-ответ', link: '/question-answer' },
            { title: 'Новости', link: '/news' },
            { title: 'Контакты', link: '/contacts' },
            { title: 'Вход \ Регистрация', link: '/auth' },
            { title: 'Все акции', link: '/promotions' },
        ],
    },
    {
        category: 'Каталог',
        links: [
            {
                title: 'Общестроительные материалы',
                link: '/construction-materials',
            },
            { title: 'Все для сауны и бани', link: '/sauna-and-bath' },
            { title: 'Инструмент', link: '/tools' },
            { title: 'Отделочные материалы', link: '/finishing-materials' },
            { title: 'Товары для дома, сада и огорода', link: '/home-garden' },
            { title: 'Электротовары', link: '/electrical-goods' },
            { title: 'Сантехника', link: '/plumbing' },
            { title: 'Столярные изделия', link: '/carpentry-products' },
            {
                title: 'Спецодежда и средства индивидуальной пожарной защиты',
                link: '/protective-clothing',
            },
            {
                title: 'Водо-газоснабжение, отопление, вентиляция',
                link: '/water-gas-heating-ventilation',
            },
            {
                title: 'Метизные, такелажные и скобяные изделия',
                link: '/hardware-products',
            },
        ],
    },
];
