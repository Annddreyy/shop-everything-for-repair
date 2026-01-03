import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BrandCard } from '@/entities/brand';
import type { Brand } from '@/entities/brand';

describe('BrandCard.vue', () => {
    it('Отображаются все переданные props', () => {
        const props: Brand = {
            id: '12',
            img: '/images/test.jpg',
            title: 'test',
        };
        const wrapper = mount(BrandCard, { props });

        expect(wrapper.get('img').attributes('src')).toBe(props.img);
    });
});
