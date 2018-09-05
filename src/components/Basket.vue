<template>
  <div class="basket util-bg-bisquit" v-if="basket.cards.length > 0">
    <div class="donate-shop__content" v-if="basketVisible" >
      <div class="basket__show-more" @click="basketVisible = !basketVisible">
        <span>Warenkorb ausblenden</span> <span class="basket__icon"><img src="/icons/shopping-cart.svg" /></span><span class="basket__chevron"><img src="/icons/chevron.svg" /></span>
      </div>
      <div class="basket__content">
        <div class="basket__package" v-for="(item, index) in basketData.cards" :key="index">
          <div class="basket__package-title">
            {{item.title}}<span class="basket__remove" @click="removeItem(index)"><img src="/icons/close.svg" /></span>
          </div>
          <Input :value="item.value" @amountChanged="setNewAmount"/>
        </div>
        <div class="basket__download">
          <span>inkl. Weihnachtskarten als PDF zum Ausdrucken</span>
        </div>
      </div>
      <div class="basket__sum">
        Gesamtsumme <span class="input__value">{{basketData.accumulatedValue}}€</span>
      </div>
      <Button :text="'Zum nächsten Schritt'" :isDisabled="basketData.length === 0" @click.native.prevent="$emit('basket-btn-clicked')"/>
    </div>

    <div class="donate-shop__content" v-else>
      <div class="basket__show-more" @click="basketVisible = !basketVisible">
        Warenkorb anzeigen
        <span class="basket__icon">
          <img src="/icons/shopping-cart.svg" />
        </span>
        <span class="basket__chevron is-open">
          <img src="/icons/chevron.svg" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Input from './Input';
import Button from './Button';
import { basket } from '../basket';

export default {
  name: 'Basket',
  components: {
    Input,
    Button,
  },
  data() {
    return {
      basketVisible: false,
      basket: basket,
    }
  },
  computed: {
    basketData() {
      return this.basket;
    },
  },
  methods: {
    setNewAmount(value) {
      console.log(value)
    },
    removeItem(index) {
      let basketItems = this.basket.cards.slice();

      basketItems.splice(index, 1);

      this.basket.cards = basketItems;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../assets/scss/partials/functions";
@import "../assets/scss/partials/variables";
@import "../assets/scss/partials/mixins";

.basket {
  margin-bottom: 24px;
  padding: 24px 0;

  .donate-shop__content {
    margin-bottom: 0;
  }
}

.basket__content {
  border-top: 1px solid color('grey');
  border-bottom: 1px solid color('grey');
  margin-bottom: 45px;
  margin-top: 24px;
  padding: 16px 0;
}

.basket__show-more {
  font-family: 'TradeGothic';
  cursor: pointer;
  display: flex;
  text-transform: uppercase;
}

.basket__package-title {
  display: flex;
  font-family: 'TradeGothic';
  font-size: 18px;
  margin-bottom: 16px;
  text-transform: uppercase;
}

.basket__remove {
  cursor: pointer;
  margin-left: auto;
}

.basket__icon {
  margin-left: 24px;
}

.basket__chevron {
  margin-left: auto;

  &.is-open {
    img {
      transform: rotate(180deg);
    }
  }
}

.basket__download {
  border-top: 1px solid color('grey');
  font-size: 16px;
  padding-left: 32px;
  padding-top: 16px;
  position: relative;

  span {
    display: inline-block;
    width: 200px;
  }

  &::before {
    content: url('/icons/pdf-file.svg');
    position: absolute;
    left: 0;
    z-index: 1;
  }
}

.basket__sum {
  font-size: 18px;
  font-family: 'TradeGothic';
  margin-bottom: 48px;
  text-transform: uppercase;
}

</style>
