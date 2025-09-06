import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { BrandsList } from '@/pages/Main/ui';
import { brands } from '@/pages/Main/config';

describe('BrandList.vue', () => {
    it('Проверка отображения списка всех переданных брендов', () => {
        const wrapper = mount(BrandsList);
        const brandComponents = wrapper.findAll('article');

        expect(brandComponents.length).toBe(brands.length);
        // brandComponents.forEach((brand, index) => {
        //     //expect(brand.get('img').attributes('src')).toBe(brands[index].img);
        // });
    });
});
