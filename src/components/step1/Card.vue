<template>
  <div class="card">
    <div class="card__head">
      <img :src="image" />
    </div>
    <div class="card__body">
      <div class="card__headline">
        {{title}}
        <span v-if="isSpecial" class="card__special">beliebt</span>
      </div>
      <div class="card__input">
        <Input :value="value" :amount="1" @amountChanged="setAmount" />
      </div>
      <a href="#basket" class="card__basket" @click="addToBasket" v-smooth-scroll="{duration: 1000}">
        in den Warenkorb
      </a>
      <div class="card__more-info-btn" @click="showMore = !showMore">
        Mehr Informationen
        <span v-if="showMore"><img class="icon-minus" src="/icons/minus.svg" /> </span>
        <span v-else><img class="icon-plus"  src="/icons/plus.svg" /> </span>
      </div>
      <div class="card__more-info" :class="{'is-active': showMore}">
        {{moreInfo}}
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../elements/Input';
import basket from '../../basket';

export default {
  name: 'Card',
  components: {
    Input,
  },
  props: {
    id: Number,
    image: String,
    title: String,
    isSpecial: Boolean,
    value: Number,
    moreInfo: String,
    occasionImages: Array,
  },
  data() {
    return {
      showMore: false,
      basket: basket,
      amount: 1,
      valueOld: 0, 
      valueNew: 0,
      countUp: false,
    }
  },
  watch: {
    valueNew() {
      let animationInterval = setInterval(() => {
        if (this.countUp) {
          if (this.valueOld === this.valueNew) {
            this.basket.accumulatedValue = this.valueNew;
            this.resetAnimationValues()
            clearInterval(animationInterval)
            return;
          }
          
          if (this.valueOld > this.valueNew) {
            this.basket.accumulatedValue = this.valueOld--;
          } else {
            this.basket.accumulatedValue = this.valueOld++;
          } 
        } else {
          clearInterval(animationInterval)
        }
      }, 1);
    }
  },
  methods: {
    addToBasket() {
      let cards = this.basket.cards.slice();

      if (this.isInBasket()) {
        this.changeAmount();
        return
      }

      cards.push({
        id: this.id,
        title: this.title,
        value: this.value,
        amount: this.amount,
        occasionImages: this.occasionImages,
      }) 

      this.basket.cards = cards;

      this.accumulateValue();
    },
    isInBasket() {
      let isInBasket = false;

      this.basket.cards.forEach(item => {
        if(item.id === this.id) {
          isInBasket = true;
        }
      })

      return isInBasket;
    },
    accumulateValue() {
      let value = 0;
      let itemCount = 0;
      this.basket.cards.forEach(item => {
        value += (item.value * item.amount);
        itemCount += item.amount;
      })

      this.setAnimationValues(value);
      this.basket.itemCount = itemCount;
    },
    setAmount(input) {
      this.amount = parseInt(input.value, 10);
    },
    changeAmount() {
      const cards = this.basket.cards;
      let currentPackage = cards.filter(item => item.id === this.id);

      currentPackage[0].amount = this.amount;

      this.accumulateValue();
    },
    // set animation data and allow counting
    setAnimationValues(newValue) {
      this.countUp = true;
      this.valueOld = this.basket.accumulatedValue;
      this.valueNew = newValue;
    },
    // reset animation data and stop counting
    resetAnimationValues() {
      this.countUp = false;
      this.valueNew = 0;
      this.valueOld = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/partials/functions";
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";

.card {
  box-shadow: 0 2px 15px -5px rgba(color('black'), 0.5);
  border-radius: 7px;
  display: block;
  margin: 0 16px 16px;
  max-width: 300px;
  width: 100%;

  @include respondMin(point('min-md')) {
    width: 45%;
  }

  @include respondMin(point('min-xl')) {
    max-width: 270px;
  }
}

.card__head {
  border-radius: 7px 7px 0 0;
  height: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
}

.card__body {
  padding: 16px;
}

.card__headline {
  display: flex;
  font-family: $ff-deco;
  font-size: 24px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.card__special {
  align-self: center;
  display: inline-block;
  border: 1px solid color('ci');
  border-radius: 3px;
  color: color('ci');
  font-size: 14px;
  line-height: 21px;
  height: 21px;
  margin-left: auto;
  padding: 0 5px;
}

.card__input {
  margin-bottom: 24px;
}

.card__basket {
  border-bottom: 4px solid color('ci');
  color: color('ci');
  display: inline-block;
  font-size: 18px;
  font-family: $ff-deco;
  margin-bottom: 24px;
  text-transform: uppercase;
  text-decoration: none;
}

.card__more-info-btn {
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 26px;

  .icon-minus {
    left: -2px;
    top: 2px;
    position: relative;
  }
}

.card__more-info {
  font-size: 16px;
  max-height: 0;
  transition: max-height 0.3s ease;
  overflow: hidden;

  &.is-active {
    max-height: 400px;
  }
}


</style>
