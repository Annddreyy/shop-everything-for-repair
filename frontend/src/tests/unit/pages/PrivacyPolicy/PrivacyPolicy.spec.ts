import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { PrivacyPolicy } from '@/pages';
import { createPinia, setActivePinia } from 'pinia';

describe('PrivacyPolicy.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Отображается правильное название и содержание страницы', () => {
        const wrapper = mount(PrivacyPolicy, {
            global: {
                stubs: {
                    RouterLink: {
                        template: '<a><slot /></a>',
                    },
                },
            },
        });

        expect(wrapper.text()).toContain('Политика конфиденциальности');
        expect(wrapper.text()).toContain(
            'Настоящая Политика конфиденциальности и обработки',
        );
    });
});
