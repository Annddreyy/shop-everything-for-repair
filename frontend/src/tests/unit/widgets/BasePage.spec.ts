import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { BasePage } from '@/pages';
import { createPinia, setActivePinia } from 'pinia';
import { BreadCrumbs, PageTitle } from '@/shared/ui';

describe('BasePage.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Показывает breadcrumbs и название страницы', () => {
        const wrapper = mount(BasePage, {
            props: {
                breadcrumbs: [
                    { title: '1', link: '/test1' },
                    { title: '2', link: '/test2' },
                ],
                title: 'Тест',
            },
        });

        expect(wrapper.findComponent(BreadCrumbs).exists()).toBeTruthy();
        expect(wrapper.findComponent(BreadCrumbs).text()).toBe('12');

        expect(wrapper.findComponent(PageTitle).exists()).toBeTruthy();
        expect(wrapper.findComponent(PageTitle).text()).toBe('Тест');
    });

    it('Не рендерятся breadcrumbs, когда не они переданы', () => {
        const wrapper = mount(BasePage, {
            props: { title: 'Тест' },
        });

        expect(wrapper.findComponent(BreadCrumbs).exists()).toBeFalsy();

        expect(wrapper.findComponent(PageTitle).exists()).toBeTruthy();
        expect(wrapper.findComponent(PageTitle).text()).toBe('Тест');
    });

    it('Не рендерится название, когда оно не передано', () => {
        const wrapper = mount(BasePage);

        expect(wrapper.findComponent(BreadCrumbs).exists()).toBeFalsy();
        expect(wrapper.findComponent(PageTitle).exists()).toBeFalsy();
    });
});
