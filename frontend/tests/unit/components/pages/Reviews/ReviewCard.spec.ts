import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ReviewCard from './../../../../../src/pages/Reviews/ui/ReviewCard.vue';
import { IReviews } from '../../../../../src/pages/Reviews/types/reviews.types';
import { formatDate } from './../../../../../src/shared/lib/workingWithDate/formatDate.lib';

const props: IReviews = {
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
        const propsWithImages: IReviews = {
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
            expect(img.attributes('src')).toBe(propsWithImages.images[index]);
        });
    });
});
