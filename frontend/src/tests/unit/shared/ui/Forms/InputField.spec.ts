import type { InputTypeHTMLAttribute } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { InputField } from '@/shared/ui';

type InputFieldType = {
    id: string;
    name: string;
    type: InputTypeHTMLAttribute;
    inputmode?:
        | 'text'
        | 'tel'
        | 'email'
        | 'search'
        | 'url'
        | 'none'
        | 'numeric'
        | 'decimal';
    placeholder?: string;
};

const props: InputFieldType = {
    id: '20frjs004',
    name: 'test-name',
    type: 'color',
};

describe('InputField.vue', () => {
    it('Отображаются все переданные props', () => {
        const wrapper = mount(InputField, { props });

        expect(wrapper.attributes('id')).toBe(props.id);
        expect(wrapper.attributes('name')).toBe(props.name);
        expect(wrapper.attributes('type')).toBe(props.type);
    });

    it('Отображается выбранный inputmode', () => {
        const propsWithInputMode: InputFieldType = {
            ...props,
            inputmode: 'email',
        };
        const wrapper = mount(InputField, { props: propsWithInputMode });

        expect(wrapper.attributes('inputmode')).toBe(
            propsWithInputMode.inputmode,
        );
    });

    it('Отображается выбранный placeholder', () => {
        const propsWithPlaceholder: InputFieldType = {
            ...props,
            placeholder: 'Тестовый placeholder',
        };
        const wrapper = mount(InputField, { props: propsWithPlaceholder });

        expect(wrapper.attributes('placeholder')).toBe(
            propsWithPlaceholder.placeholder,
        );
    });
});
