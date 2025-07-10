import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FormGroupComponent from './../../../../../src/shared/ui/Forms/FormGroupComponent.vue';
import { InputTypeHTMLAttribute } from 'vue';

type FormGroupComponentType = {
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

const props: FormGroupComponentType = {
    id: 'sj292w',
    label: 'Тестовый label',
    name: 'Тестовое имя',
    type: 'button',
};

describe('FormGroup.vue', () => {
    it('Отображаеются все переданные props', () => {
        const wrapper = mount(FormGroupComponent, { props });

        expect(wrapper.text()).toBe(`${props.label}:`);

        expect(wrapper.get('input').attributes('id')).toBe(props.id);
        expect(wrapper.get('input').attributes('name')).toBe(props.name);
        expect(wrapper.get('input').attributes('type')).toBe(props.type);
    });

    it('Отображается placeholder', () => {
        const propsWithPlaceholder: FormGroupComponentType = {
            ...props,
            placeholder: 'Тестовый placeholder',
        };
        const wrapper = mount(FormGroupComponent, {
            props: propsWithPlaceholder,
        });

        expect(wrapper.get('input').attributes('placeholder')).toBe(
            propsWithPlaceholder.placeholder,
        );
    });

    it('Отображается inputmode', () => {
        const propsWithInputMode: FormGroupComponentType = {
            ...props,
            inputmode: 'numeric',
        };
        const wrapper = mount(FormGroupComponent, {
            props: propsWithInputMode,
        });

        expect(wrapper.get('input').attributes('inputmode')).toBe(
            propsWithInputMode.inputmode,
        );
    });

    it('Отображается звездочка, если поле является обязательным', () => {
        const propsWithRequired: FormGroupComponentType = {
            ...props,
            required: true,
        };
        const wrapper = mount(FormGroupComponent, { props: propsWithRequired });

        expect(wrapper.text()).toBe(`${props.label} *:`);
    });
});
