import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { FAQCard } from '@/entities/faq/ui';
import type { FAQ } from '@/entities/faq/types';

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
