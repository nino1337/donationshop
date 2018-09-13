<template>
  <div id="basket" class="basket util-bg-bisquit" :class="{ 'is-open': basketOpen, 'is-visible': cards.length > 0 || isOccasionInBasket()}">
    <div class="donate-shop__content">
      <div class="basket__show-more" @click="basketOpen = !basketOpen">
        <span v-if="basketOpen">Warenkorb ausblenden</span> 
        <span v-else>Warenkorb einblenden</span> 
        <span class="basket__icon" :data-count="itemCount">
          <img src="/icons/shopping-cart.svg" />
        </span>
        <span class="basket__chevron">
          <img src="/icons/chevron.svg" />
        </span>
      </div>
      <div class="basket__content">
        <transition-group name="packages" tag="div" class="basket__package-wrapper">
          <div class="basket__package" v-for="(item, index) in cards" :key="index">
            <div class="basket__package-title">
              {{item.title}}<span class="basket__remove" @click="removeItem(index)"><img src="/icons/close.svg" /></span>
            </div>
            <Input :value="item.value" @amountChanged="setAmount(item.id, ...arguments)" :amount="item.amount"/>
          </div>
        </transition-group>
        <div class="basket__download" v-if="isOccasionInBasket()" ref="basketOccasion">
          <span>inkl. {{occasion.title}} als PDF zum Ausdrucken</span><img class="basket__remove" @click="removeOccasion()" src="/icons/close.svg" />
        </div>
      </div>
      <div class="basket__sum">
        Gesamtsumme <span class="input__value">{{accumulatedValue}}€</span>
      </div>
      <div class="basket__cta">
        <Button :text="'Zum nächsten Schritt'" :isDisabled="cards.length === 0" @click.native.prevent="$emit('basket-btn-clicked')"/>
      </div>
  </div>
  </div>
</template>

<script>
import Input from './elements/Input';
import Button from './elements/Button';
import basket from '../basket';

export default {
  name: 'Basket',
  components: {
    Input,
    Button, 
  },
  data() {
    return {
      basketOpen: true,
      basket: basket,
      amount: 0,
      valueOld: 0, // necessary for animation
      valueNew: 0,
      packageHeight: 0,
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
  watch: {
    valueNew() {
      let animationInterval = setInterval(() => {
        if (this.valueOld === this.valueNew) {
          clearInterval(animationInterval)
        }

        if (this.valueOld > this.valueNew) {
          this.basket.accumulatedValue = this.valueOld--;
        } else {
          this.basket.accumulatedValue = this.valueOld++;
        } 
      }, 1) 
    }
  },
  methods: {
    changeAmount(id) {
      const cards = this.basket.cards;
      let currentPackage = cards.filter(item => item.id === id);

      currentPackage[0].amount = this.amount;

      this.accumulateValue();
    },
    setAmount(id, input) {
      this.amount = parseInt(input.value, 10);

      this.changeAmount(id);
    },
    accumulateValue() {
      let value = 0;
      let itemCount = 0;
      this.basket.cards.forEach(item => {
        value += (item.value * item.amount);
        itemCount += item.amount;
      })
      this.setAnimationValues(value)

      this.basket.itemCount = itemCount;
    },
    removeItem(index) {
      let basketItems = this.basket.cards.slice();

      basketItems.splice(index, 1);

      this.basket.cards = basketItems;
      this.accumulateValue()
    },
    removeOccasion() {
      this.basket.occasion = {};
    },
    isOccasionInBasket() {
      return Object.keys(this.basket.occasion).length;
    },
    setAnimationValues(newValue) {
      this.valueOld = this.basket.accumulatedValue;
      this.valueNew = newValue;
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
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s, padding 0.5s;
  padding: 0;

  &.is-visible {
    max-height: 54px;
    padding: 15px 0 1px;
    transition: max-height 0.5s, padding 0.2s;

    @include respondMin(point('min-md')) {
      max-height: 73px;
      padding: 24px 0 1px;
    }
  }

  &.is-visible.is-open {
    max-height: 800px;

    .basket__chevron {
      img {
        transition: transform 0.5s;
        transform: rotate(0);
      }
    }
  }

  .donate-shop__content {
    margin-bottom: 0;
  }
}

.basket__content {
  border-bottom: 1px solid color('grey');
  margin-bottom: 45px;
}

.basket__package-wrapper {
  position: relative;
}

.basket__show-more {
  font-family: $ff-deco;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  margin-bottom: 16px;
  text-transform: uppercase;

  @include respondMin(point('min-md')) {
    font-size: 24px;
  }
}

.basket__package {
  margin-bottom: 22px;
  transition: transform .2s, opacity .2s;

  &:first-of-type {
    border-top: 1px solid color('grey');
    padding-top: 22px;
  }
}

.basket__package-title {
  display: flex;
  font-family: $ff-deco;
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

  img {
    transition: transform 0.5s ease;
    transform: rotate(180deg);
  }
}

.basket__download {
  border-top: 1px solid color('grey');
  display: flex;
  font-size: 16px;
  padding: 16px 0 16px 32px;
  position: relative;

  .basket__remove {
    position: absolute;
    top: 16px;
    right: 0;
  }

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
  font-family: $ff-deco;
  margin-bottom: 48px;
  text-transform: uppercase;
}

.basket__cta {
  margin-bottom: 50px;
}

//
//
// ANIMATIONS
//
//
.packages-enter {
  opacity: 1;
  transform: translateY(30px);
}

.packages-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

</style>
