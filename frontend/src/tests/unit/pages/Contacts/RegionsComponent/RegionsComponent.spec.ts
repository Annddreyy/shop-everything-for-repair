import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { RegionsComponent } from '@/pages/Contacts/ui';
import { regionsList } from '@/pages/Contacts/config';

describe('RegionsComponent.vue', () => {
    it('Проверка отображения всех городов и данных о связи', () => {
        const wrapper = mount(RegionsComponent);
        const regionComponents = wrapper.findAll('article');

        expect(regionComponents.length).toBe(regionsList.length);

        regionComponents.forEach((regionComponent, index) => {
            expect(regionComponent.text()).toContain(regionsList[index].city);
            expect(regionComponent.text()).toContain(regionsList[index].email);
            expect(regionComponent.text()).toContain(regionsList[index].phone);
        });
    });
});
