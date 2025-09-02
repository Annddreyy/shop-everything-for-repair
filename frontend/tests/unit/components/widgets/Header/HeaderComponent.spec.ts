import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HeaderComponent from './../../../../../src/widgets/Header/HeaderComponent.vue';
import { breadcrumbs } from '../../../../../src/shared/config/header/breadcrumbs.config';

describe('HeaderComponent.vue', () => {
    it('Отображаются все переданные ссылки', () => {
        const wrapper = mount(HeaderComponent);

        const linksComponents = wrapper.get('nav').findAll('li');

        expect(linksComponents.length).toBe(breadcrumbs.length);

        linksComponents.forEach((link, index) => {
            expect(link.get('routerlink').attributes('to')).toBe(
                breadcrumbs[index].link,
            );
            expect(link.get('routerlink').text()).toBe(
                breadcrumbs[index].title,
            );
        });
    });
});
