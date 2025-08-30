import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { Link } from '../../../../../src/shared/types/link.types';
import BreadCrumbs from './../../../../../src/shared/ui/BreadCrumbs/BreadCrumbs.vue';

describe('BreadCrumbs.vue', () => {
    it('Проверка наличия передаваемых props', () => {
        const props: {
            links: Link[];
        } = {
            links: [
                {
                    title: 'Стройоптторг',
                    link: '/',
                },
                {
                    title: 'Тест',
                    link: '/test',
                },
            ],
        };

        const wrapper = mount(BreadCrumbs, { props });

        props.links.forEach((link) => {
            expect(wrapper.text()).toContain(link.title);
        });

        const routerLinks = wrapper.findAll('routerlink');

        expect(routerLinks.length).toBe(props.links.length);

        routerLinks.forEach((linkWrapper, index) => {
            expect(linkWrapper.attributes('to')).toBe(props.links[index].link);
        });
    });
});
