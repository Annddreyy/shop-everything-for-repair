import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BrandList from './../../../../../../src/pages/Main/ui/Brands/BrandsList.vue';
import { brands } from '../../../../../../src/pages/Main/config/brands/brands.config';

describe('BrandList.vue', () => {
    it('Проверка отображения списка всех переданных брендов', () => {
        const wrapper = mount(BrandList);
        const brandComponents = wrapper.findAll('article');
        console.log(brandComponents);

        expect(brandComponents.length).toBe(brands.length);
        // brandComponents.forEach((brand, index) => {
        //     //expect(brand.get('img').attributes('src')).toBe(brands[index].img);
        // });
    });
});
