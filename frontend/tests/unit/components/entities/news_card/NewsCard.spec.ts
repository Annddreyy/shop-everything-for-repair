import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import NewsCard from '../../../../../src/entities/news_card/ui/NewsCardComponent.vue';
import { INewsCard } from '../../../../../src/entities/news_card/types/news.types';
import { formatDate } from '../../../../../src/shared/lib/workingWithDate/formatDate.lib';

describe('NewsCard.vue', () => {
    it('Отображаются переданные props', () => {
        const props: INewsCard = {
            id: 'djskeu48234829',
            img: '/images/test.jpg',
            title: 'Тестовая новость',
            description: 'Описание тестовой новости',
            date: new Date(2025, 11, 5),
        };

        const wrapper = mount(NewsCard, {
            props,
            global: {
                stubs: {
                    RouterLink: {
                        template: '<a><slot /></a>',
                    },
                },
            },
        });

        expect(wrapper.text()).toContain(props.title);
        expect(wrapper.text()).toContain(props.description);
        expect(wrapper.text()).toContain(formatDate(props.date));

        expect(wrapper.get('img').attributes('src')).toBe(props.img);
    });
});
