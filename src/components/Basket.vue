<template>
  <div class="donate-shop__basket util-bg-bisquit">
    <div class="donate-shop__content" v-if="!shoppingCardVisible" >
      <div class="basket__show-more" @click="shoppingCardVisible = !shoppingCardVisible">
        <span>Warenkorb anzeigen</span> <span class="basket__icon"><img src="/icons/shopping-cart.svg" /></span><span class="basket__chevron"><img src="/icons/chevron.svg" /></span>
      </div>
      <div class="basket__content">
        <div class="basket__package" v-for="(item, index) in basketData" :key="index">
          <div class="basket__package-title">
            {{item.title}}
          </div>
          <Input :classes="'is-basket'" :value="item.value" :amount="item.amount" />
        </div>
        <div class="basket__download">
          <span>inkl. Weihnachtskarten als PDF zum Ausdrucken</span>
        </div>
      </div>
      <div class="basket__sum">
        Gesamtsumme: {{basketValue}}€
      </div>
    </div>

    <div class="donate-shop__content" v-else>
      <div class="basket__show-more" @click="shoppingCardVisible = !shoppingCardVisible">
        Warenkorb ausblenden <span class="basket__icon"><img src="/icons/shopping-cart.svg" /> </span> <span class="basket__chevron is-open"><img src="/icons/chevron.svg" /></span>
      </div>
    </div>
  </div>
</template>

<script>
import Input from './Input';
export default {
  name: 'Basket',
  components: {
    Input,
  },
  data() {
    return {
      shoppingCardVisible: false,
      basket: [{
        title: 'Geburtstagspacket',
        amount: '',
        value: 30,
      },{
        title: 'Geburtstagspacket',
        amount: '',
        value: 40,
      },{
        title: 'Geburtstagspacket',
        amount: '',
        value: 50,
      }],
      accumulatedValue: 50,
    }
  },
  computed: {
    basketData() {
      return this.basket;
    },
    basketValue() {
      return this.accumulatedValue;
    }
  },
  methods: {
    accumulateValue() {
      let value = 0;
      this.basket.forEach(item => {
        value += (item.value * item.amount);
      })

      this.accumulatedValue = value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './../assets/scss/main.scss';

.basket__content {
  border-top: 1px solid color('grey');
  border-bottom: 1px solid color('grey');
  margin-bottom: 45px;
  padding: 16px 0;
}

.basket__show-more {
  cursor: pointer;
  display: flex;
  padding: 24px 0;
}

.basket__package-title {
  font-size: 18px;
  margin-bottom: 16px;
  text-transform: uppercase;
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

</style>
