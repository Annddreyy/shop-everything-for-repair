import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ReviewCard } from '@/entities/review/ui';
import type { Review } from '@/entities/review/types';
import { formatDate } from '@/shared/lib';

describe('ReviewCard.vue', () => {
    it('Отображаются все переданные пропсы', () => {
        const props: Review = {
            id: 'id',
            author: 'author',
            date: new Date(2025, 12, 11),
            text: 'text',
            images: ['test1.img', 'test2.img'],
        };

        const wrapper = mount(ReviewCard, { props });

        expect(wrapper.text()).toContain(props.author);
        expect(wrapper.text()).toContain(props.text);

        expect(wrapper.text()).toContain(formatDate(props.date));
        expect(wrapper.findAll('img').length).toBe(props.images?.length);

        expect(wrapper.findAll('img')[0].attributes('src')).toBe(
            props.images![0],
        );
    });

    it('Если не переданы картинки, то не появляются img', () => {
        const props: Review = {
            id: 'id',
            author: 'author',
            date: new Date(2025, 12, 11),
            text: 'text',
        };

        const wrapper = mount(ReviewCard, { props });

        expect(wrapper.findAll('img').length).toBe(0);
    });
});
