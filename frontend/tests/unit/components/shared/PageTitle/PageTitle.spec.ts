import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import PageTitle from './../../../../../src/shared/ui/PageTitle/PageTitle.vue';

describe('PageTitle.vue', () => {
    it('Проверка наличия всех передаваемых props', () => {
        const props = {
            title: 'Тестовый заголовок',
        };
        const wrapper = mount(PageTitle, { props });

        expect(wrapper.text()).toContain(props.title);
    });
});
