import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FAQCard from './../../../../../../src/pages/FAQ/entities/faq/ui/FAQCard.vue';
import { faqList } from './../../../../../../src/pages/FAQ/config/faqList.config';

describe('FAQCard.vue', () => {
    it('Отображаются все переданные FAQ', () => {
        const wrapper = mount(FAQCard);
        const faqCards = wrapper.findAll('details');

        expect(faqCards.length).toBe(faqList.length);

        faqCards.forEach((card, index) => {
            expect(card.text()).toContain(faqList[index].answer);
            expect(card.text()).toContain(faqList[index].question);
        });
    });
});
