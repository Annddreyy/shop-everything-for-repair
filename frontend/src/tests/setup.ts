import { config } from '@vue/test-utils';

config.global.stubs = {
    RouterLink: {
        props: ['to'],
        template: `<a :href="to"><slot /></a>`,
    },
    RouterView: true,
    ButtonComponent: true,
};
