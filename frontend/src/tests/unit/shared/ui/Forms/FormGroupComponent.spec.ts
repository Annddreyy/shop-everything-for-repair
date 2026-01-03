import type { InputTypeHTMLAttribute } from 'vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { FormGroup, TextareaField } from '@/shared/ui';

type FormGroupType = {
    id: string;
    label: string;
    name: string;
    type: InputTypeHTMLAttribute;

    required?: boolean;
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

const props: FormGroupType = {
    id: 'sj292w',
    label: 'Тестовый label',
    name: 'Тестовое имя',
    type: 'button',
};

describe('FormGroup.vue', () => {
    it('Отображаеются все переданные props', () => {
        const wrapper = mount(FormGroup, { props });

        expect(wrapper.text()).toBe(`${props.label}:`);

        expect(wrapper.get('input').attributes('id')).toBe(props.id);
        expect(wrapper.get('input').attributes('name')).toBe(props.name);
        expect(wrapper.get('input').attributes('type')).toBe(props.type);
    });

    it('Отображается placeholder', () => {
        const propsWithPlaceholder: FormGroupType = {
            ...props,
            placeholder: 'Тестовый placeholder',
        };
        const wrapper = mount(FormGroup, {
            props: propsWithPlaceholder,
        });

        expect(wrapper.get('input').attributes('placeholder')).toBe(
            propsWithPlaceholder.placeholder,
        );
    });

    it('Отображается inputmode', () => {
        const propsWithInputMode: FormGroupType = {
            ...props,
            inputmode: 'numeric',
        };
        const wrapper = mount(FormGroup, {
            props: propsWithInputMode,
        });

        expect(wrapper.get('input').attributes('inputmode')).toBe(
            propsWithInputMode.inputmode,
        );
    });

    it('Отображается звездочка, если поле является обязательным', () => {
        const propsWithRequired: FormGroupType = {
            ...props,
            required: true,
        };
        const wrapper = mount(FormGroup, { props: propsWithRequired });

        expect(wrapper.text()).toBe(`${props.label} *:`);
    });

    it('Отображается компонент textarea, если prop type = "textarea"', () => {
        const wrapper = mount(FormGroup, {
            props: {
                id: 'test',
                name: 'test',
                type: 'textarea',
                label: 'test',
            },
        });
        expect(wrapper.findComponent(TextareaField).exists()).toBeTruthy();
    });
});
