import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { AdvantagesComponent } from '@/pages/Main/ui';
import { advantages } from '@/shared/config/advantages';

describe('AdvantagesComponent.vue', () => {
    it('Отображаются все переданные примущества компании', () => {
        const wrapper = mount(AdvantagesComponent);
        const advantagesComponents = wrapper.findAll('article');

        expect(advantagesComponents.length).toBe(advantages.length);

        advantagesComponents.forEach((advantage, index) => {
            expect(advantage.text()).toContain(advantages[index].description);
            expect(advantage.get('img').attributes('src')).toBe(
                advantages[index].img,
            );
        });
    });
});
