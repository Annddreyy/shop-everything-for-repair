import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { FAQCard } from '@/entities/faq';
import type { FAQ } from '@/entities/faq';

describe('FAQCard.vue', () => {
    it('Отображаются все переданные FAQ', () => {
        const props: FAQ = {
            id: 'id',
            question: 'question',
            answer: 'answer',
        };

        const wrapper = mount(FAQCard, { props });

        expect(wrapper.text()).toContain(props.question);
        expect(wrapper.text()).toContain(props.answer);
    });
});
