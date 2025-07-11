import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { IProductCard } from './../../../../../src/entities/product_card/types/product';
import ProductCard from './../../../../../src/entities/product_card/ui/ProductCard.vue';

describe('ProductCard.vue', () => {
    it('Отображаются все переданные props без скидки', () => {
        const props: IProductCard = {
            id: 'fi93ksakf',
            title: 'Тестовый товар',
            img: '/images/test.jpg',
            price: 4350,
            article: 'Dkf2525-314',
            statuses: ['новинка', 'распродажа'],
        };

        const wrapper = mount(ProductCard, {
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
        expect(wrapper.text()).toContain(props.price);
        expect(wrapper.text()).toContain(props.article);
        expect(wrapper.text()).toContain(props.statuses[0]);
        expect(wrapper.text()).toContain(props.statuses[1]);

        expect(wrapper.get('img').attributes('src')).toBe(props.img);
    });
});
