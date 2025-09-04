import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { ReviewCard } from '@/entities/review/ui';
import type { Review } from '@/entities/review/types';
import { formatDate } from '@/shared/lib';

const props: Review = {
    author: 'Тестовый автор',
    date: new Date(2025, 7, 12),
    text: 'Тестовый текст',
};

describe('ReviewCard.vue', () => {
    it('Отображаются переданные props', () => {
        const wrapper = mount(ReviewCard, { props });

        expect(wrapper.text()).toContain(props.author);
        expect(wrapper.text()).toContain(props.text);
        expect(wrapper.text()).toContain(formatDate(props.date));
    });

    it('Отображаются переданные избражения', () => {
        const propsWithImages: Review = {
            ...props,
            images: [
                '/images/test1.jpg',
                '/images/test2.jpg',
                '/images/test3.jpg',
            ],
        };
        const wrapper = mount(ReviewCard, { props: propsWithImages });

        const images = wrapper.findAll('img');

        expect(images.length).toBe(propsWithImages.images?.length);

        images.forEach((img, index) => {
            expect(img.attributes('src')).toBe(propsWithImages.images![index]);
        });
    });
});
