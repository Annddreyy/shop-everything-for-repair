<template>
    <BasePage
        title="О компании"
        :breadcrumbs="breadcrumbs"
        :html="html"
        :background-image="background"
    >
        <div class="container">
            <h2>Почему именно мы</h2>
            <Advantages :advantages="advantagesStore.advantages" with-full-description />
            <h2>История ООО “Стройоптторг”</h2>
            <div class="history-cards">
                <div class="history-cards__card">
                    <span class="history-cards__year">2003</span>
                    <h3 class="history-cards__title">
                        Компания ООО «Стройоптторг» была зарегистрирована в
                        реестре и получила свидетельство о регистрации 1 октября
                        2003 года.
                    </h3>
                    <ul class="history-cards__description-list">
                        <li class="history-cards__description-paragraph">
                            Общая площадь земельного участка составляла
                            <strong>10 000 м<sup>2</sup>.</strong>
                        </li>
                        <li class="history-cards__description-paragraph">
                            площадь складских помещений
                            <strong>850 м<sup>2</sup>.</strong>
                        </li>
                        <li class="history-cards__description-paragraph">
                            численность сотрудников
                            <strong>10 человек.</strong>
                        </li>
                    </ul>
                </div>
                <div class="history-cards__card">
                    <span class="history-cards__year">2008</span>
                    <h3 class="history-cards__title">
                        С годами компания динамично росла и развивалась и уже к
                        2008 г. мы достигли более высоких результатов:
                    </h3>
                    <ul class="history-cards__description-list">
                        <li class="history-cards__description-paragraph">
                            общая площадь базы составляла
                            <strong>58 000 м<sup>2</sup>.</strong>
                        </li>
                        <li class="history-cards__description-paragraph">
                            площадь складских помещений
                            <strong>5 200 м<sup>2</sup>.</strong>
                        </li>
                        <li class="history-cards__description-paragraph">
                            численность коллектива возрасла до
                            <strong>300 человек</strong>
                        </li>
                    </ul>
                </div>
                <div class="history-cards__card">
                    <span class="history-cards__year">2018</span>
                    <h3 class="history-cards__title">
                        К своему 15-ти летнему юбилею компания расширила
                        торговые площади до 17 805.3 м²
                    </h3>
                    <ul class="history-cards__description-list">
                        <li class="history-cards__description-paragraph">
                            Торговый центр №1 -
                            <strong>5 545 м<sup>2</sup></strong>
                        </li>
                        <li class="history-cards__description-paragraph">
                            Торговый центр №2 -
                            <strong>3 951,2 м<sup>2</sup></strong>
                        </li>
                        <li class="history-cards__description-paragraph">
                            Складское помещение -
                            <strong>8 308,6 м<sup>2</sup>.</strong>
                        </li>
                    </ul>
                </div>
                <div
                    :class="['history-cards__card', 'history-cards__card--now']"
                >
                    <span
                        :class="[
                            'history-cards__year',
                            'history-cards__card--now',
                        ]"
                    >
                        Сегодня
                    </span>
                    <ul class="history-cards__description-list--now">
                        <li class="history-cards__description-paragraph--now">
                            Торговый центр №1 -
                            <strong>5 545 м<sup>2</sup></strong>
                        </li>
                        <li class="history-cards__description-paragraph--now">
                            Торговый центр №2 -
                            <strong>3 951,2 м<sup>2</sup></strong>
                        </li>
                        <li class="history-cards__description-paragraph--now">
                            Складское помещение -
                            <strong>8 308,6 м<sup>2</sup>.</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <LastNews class="last-news" />
    </BasePage>
</template>

<script setup lang="ts">
import { Advantages, useAdvantagesStore } from '@/entities/advantage';
import { LastNews } from '@/widgets';
import { background } from './assets';
import BasePage from './BasePage.vue';

const breadcrumbs: Link[] = [
    { title: 'Стройоптторг', link: '/' },
    { title: 'О компании', link: '/about-company' },
];

const advantagesStore = useAdvantagesStore();
await advantagesStore.getAdvantages();

const html = `
<div style="padding-bottom: 52px; width: 50%; font-size: 18px;">
  <p style="margin: 0 0 15px 0; padding-bottom: 15px;">
    <strong>«Стройопторг» - крупнейшая оптово-розничная компания по продаже строительных и отделочных материалов.</strong>
  </p>

  <p style="margin: 15px 0; line-height: 1.6;">
    Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.
  </p>

  <p style="margin: 15px 0; line-height: 1.6;">
    Вы всегда можете прийти к нам, пройтись по нашим складским и торговым площадям, оценить, как мы храним, принимаем и продаем товары. Пообщаться с продавцами-консультантами, получить консультацию по товарам у менеджеров.
  </p>

  <p style="margin: 15px 0; line-height: 1.6;">
    Вы также можете всегда пожаловаться нам, спросить совета или вернуть не понравившийся товар. Если же Вам что- то не понравилось, и Вы остались недовольны нашим сервисом - не стесняйтесь сообщить нам об этом. Только так мы сможем понять, что делаем что-то не так. И только так мы сможем стать еще лучше!
  </p>

  <p style="margin: 15px 0; line-height: 1.6;">
    Все товары, представленные на сайте, гарантированно есть в наличии.
  </p>

  <p style="margin: 15px 0 0 0; line-height: 1.6;">
    Помимо материалов, мы предлагаем своим клиентам самый большой набор услуг, которые позволяют значительно упростить процесс строительства и ремонта и сделать его легким и комфортным.
  </p>
</div>
`;
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

h2 {
    font-size: 33px;
    margin-bottom: 48px;

    &:first-of-type {
        margin-top: 80px;
    }
}

.history-cards {
    @extend .grid-2;
    gap: 40px;

    margin-bottom: 80px;

    &__card {
        @extend .column;
        gap: 15px;

        position: relative;

        padding: 35px 25px;

        border: 3px solid #e6eef6;
        border-radius: 8px;
    }

    &__year {
        position: absolute;
        top: -20px;

        padding: 3px 15px;

        background-color: white;

        font-size: 27px;
        font-weight: bold;
        color: #186fd4;
    }

    &__title {
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
    }

    &__description-list {
        list-style-type:disc;
    }
}

::marker {
    color: #EE0906;
}

.last-news {
    margin-bottom: 110px;
}

:deep(.advantages) {
    display: flex;
    gap: 97px;
    row-gap: 20px;
}

:deep(.advantage) {
    align-self: self-start;
    flex: 1;
    gap: 15px;
}

:deep(.advantage__img) {
    align-self: self-start;
    width: 52px;
    height: 52px;
}

:deep(.advantage__information) {
    display: flex;
    flex-direction: column;
    gap: 11px;

    margin-top: 15px;
}

:deep(.advantage__description) {
    font-size: 20px;
}
</style>
