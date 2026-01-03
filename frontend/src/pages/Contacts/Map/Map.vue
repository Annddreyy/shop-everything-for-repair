<template>
    <div class="map-container container">
        <div class="map" ref="map"></div>
        <div class="address-information">
            <div class="address-information__block">
                <img
                    class="address-information__icon"
                    src="./assets/address-icon.svg"
                    alt=""
                />
                <div class="address-information__text">
                    <strong class="address-information__title">Адрес:</strong>
                    <address>
                        369012, Карачаево-Черкесская Республика, г. Черкесск, ул
                        Октябрьская, дом 301
                    </address>
                </div>
            </div>
            <div class="address-information__block">
                <img
                    class="address-information__icon"
                    src="./assets/phone-icon.svg"
                    alt=""
                />
                <div class="address-information__text">
                    <strong class="address-information__title">Телефон:</strong>
                    <p class="phone">8 (8782) 28-42-72</p>
                </div>
            </div>
            <div class="address-information__block">
                <img
                    class="address-information__icon"
                    src="./assets/email-icon.svg"
                    alt=""
                />
                <div class="address-information__text">
                    <strong class="address-information__title">
                        Email адрес:
                    </strong>
                    <a class="email" href="mailto:info@stroiopttorg.ru">
                        info@stroiopttorg.ru
                    </a>
                </div>
            </div>
            <div class="address-information__block">
                <img
                    class="address-information__icon"
                    src="./assets/phone-icon.svg"
                />
                <div class="address-information__text">
                    <strong class="address-information__title">
                        Время работы:
                    </strong>
                    <p>
                        Ежедневно, с 8:00 до 18:00 <br />
                        Без перерыва и выходных
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { Loader } from '@googlemaps/js-api-loader';

const mapElem = useTemplateRef('map');

onMounted(async () => {
    const loader = new Loader({
        apiKey: import.meta.env.GOOGLE_MAPS_KEY,
        version: 'weekly',
        libraries: ['places'],
        language: 'ru',
        region: 'RU',
    });

    const google = await loader.importLibrary('core');
    const map = new google.maps.Map(mapElem.value, {
        center: { lat: 55.7558, lng: 37.6173 },
        zoom: 20,
        mapId: 'DEMO_MAP_ID',
    });

    new google.maps.Marker({
        position: { lat: 55.7558, lng: 37.6173 },
        map,
    });
});
</script>

<style lang="scss" scoped>
@use '@/app/styles/display' as *;

.map-container {
    position: relative;
    margin-bottom: 50px;

    .map {
        width: 85%;
        height: 611px;
    }

    .address-information {
        @extend .column;
        gap: 23px;

        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);

        width: 351px;
        padding: 30px;

        background-color: white;
        box-shadow: 0 4px 19px #171b2012;
        border-radius: 6px;

        &__block {
            @extend .row-a-s;
            gap: 10px;
        }

        &__text {
            @extend .column;
            gap: 10px;

            address {
                font-size: 15px;
                font-style: normal;
            }

            .phone {
                font-size: 17px;
            }

            .email {
                color: #186fd4;
                text-decoration: underline;
            }
        }

        &__title {
            font-size: 17px;
        }
    }
}
</style>
