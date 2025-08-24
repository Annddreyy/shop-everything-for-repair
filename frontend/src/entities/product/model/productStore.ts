import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
    state: () => ({
        title: 'Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч',
        article: 'X3234SF23',
        images: [
            'https://avatars.mds.yandex.net/i?id=5d4cf766a55d4908d12ec43219e1b833257fcbf2-16514006-images-thumbs&n=13',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://avatars.mds.yandex.net/i?id=5d4cf766a55d4908d12ec43219e1b833257fcbf2-16514006-images-thumbs&n=13',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://avatars.mds.yandex.net/i?id=5d4cf766a55d4908d12ec43219e1b833257fcbf2-16514006-images-thumbs&n=13',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
            'https://i.pinimg.com/736x/45/cb/40/45cb408bf05ad2afbe94521465673411.jpg',
        ],
        price: 12000,
        promotionPercent: 15,
        category: 'Электроинструмент',
        count: 25,
        characteristics: [
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
            { title: '2312e', value: 'dewedwed' },
        ],
        about: 'Аккумуляторная дрель-шуруповерт **Makita DF347DWE** используется при сборке мебели,выполнении ремонтных и отделочных работ в зданиях и на улице. Двухскоростной редукторупрощает ведение различных работ: первая скорость предназначена для заворачиванияшурупов, вторая - для сверления. Литий-ионная технология увеличивает срок службыаппарата и позволяет заряжать аккумулятор вне зависимости от степени его разрядки.Модель работает с батареями серии G. Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч — в нашем интернет-магазине можно приобрести с дополнительной выгодой: \n - оплата бонусами до 30% от стоимости товара для владельцев бонусных карт; - следите за регулярными акциями и распродажами при покупке онлайн! Аккумуляторный шуруповерт Makita DF 347 DWE Отличный надежный инструмент для профессионального и бытового использования. Аккумуляторы Li-ion, от которых питается инструмент, обеспечивают полную автономную и длительную работу на одной зарядке.',
    }),

    getters: {
        getMainInformation: (state) => {
            return {
                title: state.title,
                price: state.price,
                photos: state.images,
            };
        },
    },
});
