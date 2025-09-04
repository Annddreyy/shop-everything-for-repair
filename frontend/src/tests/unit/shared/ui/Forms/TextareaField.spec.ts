import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { TextareaField } from '@/shared/ui';

type TextareaFieldType = {
    name: string;
    id: string;
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

const props: TextareaFieldType = {
    id: 'dkd923e',
    name: 'Тестовое имя',
};

describe('TextareaField.vue', () => {
    it('Отображаются все переданные props', () => {
        const wrapper = mount(TextareaField, { props });

        expect(wrapper.attributes('id')).toBe(props.id);
        expect(wrapper.attributes('name')).toBe(props.name);
    });

    it('Проверка отображения выбранного inputmode', () => {
        const propsWithInputMode: TextareaFieldType = {
            ...props,
            inputmode: 'text',
        };
        const wrapper = mount(TextareaField, { props: propsWithInputMode });

        expect(wrapper.attributes('inputmode')).toBe(
            propsWithInputMode.inputmode,
        );
    });

    it('Проверка отображения выбранного placeholder', () => {
        const propsWithPlaceholder: TextareaFieldType = {
            ...props,
            placeholder: 'Тестовый placeholder',
        };
        const wrapper = mount(TextareaField, { props: propsWithPlaceholder });

        expect(wrapper.attributes('placeholder')).toBe(
            propsWithPlaceholder.placeholder,
        );
    });
});
