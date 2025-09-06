import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { HeaderComponent } from '@/widgets';
import { breadcrumbs } from '@/widgets/Header/config/links';
import { createPinia, setActivePinia } from 'pinia';
import { ButtonComponent } from '@/shared/ui';

describe('HeaderComponent.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    it('Отображаются все переданные ссылки', () => {
        const wrapper = mount(HeaderComponent, {
            global: {
                plugins: [createPinia()],
                stubs: {
                    RouterLink: {
                        template: '<a><slot /></a>',
                    },
                },
                components: { ButtonComponent },
            },
        });

        const linksComponents = wrapper.get('nav').findAll('li');

        expect(linksComponents.length).toBe(breadcrumbs.length);

        linksComponents.forEach((link, index) => {
            expect(link.get('a').attributes('to')).toBe(
                breadcrumbs[index].link,
            );
            expect(link.get('a').text()).toBe(breadcrumbs[index].title);
        });
    });
});
