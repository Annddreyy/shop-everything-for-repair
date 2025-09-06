import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { FooterLinks } from '@/widgets/Footer';
import { breadcrumbs } from '@/widgets/Footer/config/links';

describe('FooterLinks.vue', () => {
    it('Отображаются все переданные ссылки', () => {
        const wrapper = mount(FooterLinks);

        const linksGroups = wrapper.findAll('div');
        expect(linksGroups.length).toBe(breadcrumbs.length);

        linksGroups.forEach((group, indexGroup) => {
            expect(group.get('p').text()).toBe(
                breadcrumbs[indexGroup].category,
            );

            const linksList = group.findAll('li');
            expect(linksList.length).toBe(
                breadcrumbs[indexGroup].breadcrumbs.length,
            );

            linksList.forEach((link, indexLink) => {
                expect(link.text()).toBe(
                    breadcrumbs[indexGroup].breadcrumbs[indexLink].title,
                );
                expect(link.get('routerlink').attributes('to')).toBe(
                    breadcrumbs[indexGroup].breadcrumbs[indexLink].link,
                );
            });
        });
    });
});
