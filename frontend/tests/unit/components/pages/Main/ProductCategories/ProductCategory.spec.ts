import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ProductCategoryCard from './../../../../../../src/pages/Main/ui/ProductCategoryCard/ProductCategoryCard.vue';
import { ProductCategory } from '../../../../../../src/pages/Main/config/productCategoryCards/categories.config';

describe('ProductCategoryCard.vue', () => {
    it('Отображаются все переданные props', () => {
        const props: ProductCategory = {
            title: 'Тестовое название',
            img: '/images/test.jpg',
            link: '/tests',
        };
        const wrapper = mount(ProductCategoryCard, { props });

        expect(wrapper.attributes('to')).toBe(props.link);
        expect(wrapper.get('img').attributes('src')).toBe(props.img);
        expect(wrapper.get('img').attributes('alt')).toBe(props.title);
        expect(wrapper.get('h3').text()).toBe(props.title);
    });
});
