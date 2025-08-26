<template>
    <section class="mailing-list-form">
        <h3 class="mailing-list-form__title">Подпишитесь на рассылку</h3>
        <p class="mailing-list-form__description">
            Регулярные скидки и спецпредложенения, а так же новости компании.
        </p>
        <input
            type="text"
            placeholder="Email"
            class="mailing-list-form__email"
        />
        <button type="submit" class="mailing-list-form__subscribe">
            Подписаться
        </button>
        <div class="mainling-list-form__bottom">
            <Checkbox></Checkbox>
            <label>
                Согласен с обработкой персональных данных в соответствии с
                политикой конфиденциальности
            </label>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.mailing-list-form {
    &__title {
        font-size: 18px;
        color: #1d1d27;
    }

    &__description {
        font-size: 14px;
        color: #6a6f75;
    }

    &__email {
        padding: 25px 20px;
        border: 1px solid #ebeef0;
        box-shadow: 0 1px 2px #00000012 inset;
        font-size: 15px;

        &::placeholder {
            color: #adb1b7;
        }
    }
}
</style>
