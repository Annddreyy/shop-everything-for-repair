<template>
    <nav class="navigation">
        <button class="navigation__burger-button">
            <img src="./assets/burger-button.svg" />
            <span class="navigation__burger-button-label">Меню</span>
        </button>
        <ul class="navigation__links">
            <li v-for="link in breadcrumbs" :key="link.link">
                <RouterLink :to="link.link" class="navigation__link">
                    {{ link.title }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
const breadcrumbs: Link[] = [
    { title: 'О компании', link: '/about-company' },
    { title: 'Оплата', link: '/payment' },
    { title: 'Доставка', link: '/delivery' },
    { title: 'Возврат', link: '/return' },
    { title: 'Отзывы', link: '/reviews' },
    { title: 'Вопрос-ответ', link: '/faq' },
    { title: 'Новости', link: '/news' },
    { title: 'Контакты', link: '/contacts' },
];
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.navigation {
    ul {
        list-style: none;
    }

    &__burger-button {
        display: none;
        background-color: transparent;
    }

    &__burger-button-label {
        margin-left: 13px;
    }

    &__links {
        @extend .row-a-c;
        gap: 30px;
    }

    &__link {
        color: #6c6f71;
        font-size: 14px;
    }

    @media (max-width: 1250px) {
        &__links {
            display: none;
        }

        &__burger-button {
            display: block;
        }
    }

    @media (max-width: 600px) {
        &__burger-button-label {
            display: none;
        }
    }
}
</style>
