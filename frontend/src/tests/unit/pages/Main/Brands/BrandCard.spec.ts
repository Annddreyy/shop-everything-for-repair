import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BrandCard } from '@/pages/Main/ui';
import type { Brand } from '@/pages/Main/types';

describe('BrandCard.vue', () => {
    it('Отображаются все переданные props', () => {
        const props: Brand = {
            id: 12,
            img: '/images/test.jpg',
        };
        const wrapper = mount(BrandCard, { props });

        expect(wrapper.get('img').attributes('src')).toBe(props.img);
    });
});
