import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { BreadCrumbs } from '@/shared/ui';

describe('BreadCrumbs.vue', () => {
    it('Проверка наличия передаваемых props', () => {
        const props: {
            breadcrumbs: Link[];
        } = {
            breadcrumbs: [
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

        props.breadcrumbs.forEach((link) => {
            expect(wrapper.text()).toContain(link.title);
        });

        const routerLinks = wrapper.findAll('a');

        expect(routerLinks.length).toBe(props.breadcrumbs.length);

        routerLinks.forEach((linkWrapper, index) => {
            expect(linkWrapper.attributes('href')).toBe(
                props.breadcrumbs[index].link,
            );
        });
    });
});
