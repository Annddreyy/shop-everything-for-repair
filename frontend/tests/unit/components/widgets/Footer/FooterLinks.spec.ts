import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FooterLinks from './../../../../../src/widgets/Footer/FooterLinks.vue';
import { links } from './../../../../../src/shared/config/footer/links.config';

describe('FooterLinks.vue', () => {
    it('Отображаются все переданные ссылки', () => {
        const wrapper = mount(FooterLinks);

        const linksGroups = wrapper.findAll('div');
        expect(linksGroups.length).toBe(links.length);

        linksGroups.forEach((group, indexGroup) => {
            expect(group.get('p').text()).toBe(links[indexGroup].category);

            const linksList = group.findAll('li');
            expect(linksList.length).toBe(links[indexGroup].links.length);

            linksList.forEach((link, indexLink) => {
                expect(link.text()).toBe(
                    links[indexGroup].links[indexLink].title,
                );
                expect(link.get('routerlink').attributes('to')).toBe(
                    links[indexGroup].links[indexLink].link,
                );
            });
        });
    });
});
