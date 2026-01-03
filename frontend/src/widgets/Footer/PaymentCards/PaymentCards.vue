<template>
    <section class="cards">
        <div class="payment-cards">
            <span>Мы принимаем к оплате:</span>
            <div class="payment-cards__images">
                <img src="./assets/sber-icon.svg" alt="Сбер" />
                <img src="./assets/tinkoff-icon.svg" alt="Тинькофф" />
                <img src="./assets/mir-icon.svg" alt="Картами МИР" />
                <img src="./assets/visa-icon.svg" alt="Картами VISA" />
                <img src="./assets/xalva-icon.svg" alt="Картами Халва" />
            </div>
        </div>
        <div class="email-block">
            <span>Подпишитесь на рассылку и будьте в курсе!</span>
            <form class="email-block__form">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Ваш email"
                />
                <button>
                    <img src="./assets/send-email.svg" alt="Отправить почту" />
                </button>
            </form>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '@/app/styles/display' as *;

.cards {
    @extend .row-a-c;
    justify-content: space-between;
    padding: 28px 0;

    border-bottom: 1px solid #dce1e7;

    .payment-cards {
        @extend .row-a-c;
        gap: 101px;

        &__images {
            @extend .row-a-c;
            gap: 45px;

            img {
                filter: opacity(50%);
            }
        }
    }

    .email-block {
        @extend .row-a-c;

        span {
            width: 220px;
        }

        &__form {
            @extend .row-a-c;
            justify-content: space-between;

            width: 430px;
            padding: 15px 20px;

            background-color: var(--white);

            input {
                font-size: 14px;
            }

            button {
                background-color: transparent;
            }
        }
    }
}
</style>
