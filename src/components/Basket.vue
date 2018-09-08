<template>
  <div class="basket util-bg-bisquit" v-if="cards.length > 0">
    <div class="donate-shop__content" v-if="basketVisible" >
      <div class="basket__show-more" @click="basketVisible = !basketVisible">
        <span>Warenkorb ausblenden</span> <span class="basket__icon" :data-count="itemCount"><img src="/icons/shopping-cart.svg" /></span><span class="basket__chevron"><img src="/icons/chevron.svg" /></span>
      </div>
      <div class="basket__content">
        <div ref="basketPackage" class="basket__package" v-for="(item, index) in cards" :key="index" :data-index="index" >
          <div class="basket__package-title">
            {{item.title}}<span class="basket__remove" @click="removeItem(index)"><img src="/icons/close.svg" /></span>
          </div>
          <Input :value="item.value" @amountChanged="setAmount" :amount="item.amount"/>
        </div>
        <div class="basket__download" v-if="Object.keys(occasion).length">
          <span>inkl. Weihnachtskarten als PDF zum Ausdrucken</span>
        </div>
      </div>
      <div class="basket__sum">
        Gesamtsumme <span class="input__value">{{accumulatedValue}}€</span>
      </div>
      <Button :text="'Zum nächsten Schritt'" :isDisabled="cards.length === 0" @click.native.prevent="$emit('basket-btn-clicked')"/>
    </div>

    <div class="donate-shop__content" v-else>
      <div class="basket__show-more" @click="basketVisible = !basketVisible">
        Warenkorb anzeigen
        <span class="basket__icon" :data-count="itemCount">
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
import basket from '../basket';

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
      amount: 0,
      packageIndex: 0,
    }
  },
  computed: {
    occasion() {
      return this.basket.occasion;
    },
    accumulatedValue() {
      return this.basket.accumulatedValue;
    },
    cards() {
      return this.basket.cards;
    },
    itemCount() {
      return this.basket.itemCount;
    }
  },
  methods: {
    changeAmount() {
      const basketPackage = this.$refs.basketPackage;
      const basketPackageIndex = parseInt(basketPackage.dataset.index); // TODO fix

      this.basket.cards[basketPackageIndex].amount = this.amount;

      this.accumulateValue();
    },
    setAmount(input) {
      this.amount = parseInt(input.value);

      this.changeAmount();
    },
    accumulateValue() {
      let value = 0,
      itemCount = 0;
      this.basket.cards.forEach(item => {
        value += (item.value * item.amount);
        itemCount += item.amount;
      })

      this.basket.itemCount = itemCount;
      this.basket.accumulatedValue = value;
    },
    removeItem(index) {
      let basketItems = this.basket.cards.slice();

      basketItems.splice(index, 1);

      this.basket.cards = basketItems;
      this.setCount()
    },
    setCount() {
      let itemCount = 0;
      this.basket.cards.forEach(item => {
        itemCount += item.amount;
      })

      this.basket.itemCount = itemCount;      
    },
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
  position: relative;

  &::after {
    background-color: color('ci');
    border-radius: 50%;
    content: attr(data-count);
    color: color('white');
    font-size: 16px;
    line-height: 22px;
    height: 20px;
    right: -15px;
    position: absolute;
    text-align: center;
    width: 20px;
    z-index: 1;
  }
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
