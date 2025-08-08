import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PromotionCard from './../../../../../src/entities/promotion_card/ui/PromotionCard.vue';
import { IPromotionCard } from '../../../../../src/entities/promotion_card/types/promotion';

describe('PromotionCard.vue', () => {
    it('Проверка наличия переданных props', () => {
        const props: IPromotionCard = {
            id: 'fhsji29290',
            title: 'Тестовое название',
            promotionPercent: 12,
            backgroundImg: '/images/test.jpg',
        };

        const wrapper = mount(PromotionCard, {
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
        expect(wrapper.text()).toContain(props.promotionPercent);

        expect(wrapper.get('article').attributes('style')).toContain(
            props.backgroundImg,
        );
    });
});
