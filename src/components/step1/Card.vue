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
        <Input :value="value" :amount="1" @amountChanged="setAmount" />
        <div class="card__basket" @click="addToBasket">
          in den Warenkorb
        </div>
        <div class="card__more-info-btn" @click="showMore = !showMore">
          Mehr Informationen
          <span v-if="showMore"><img src="/icons/minus.svg" /> </span>
          <span v-else><img src="/icons/plus.svg" /> </span>
        </div>
        <div v-if="showMore" class="card__more-info">
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
    moreInfo: String
  },
  data() {
    return {
      showMore: false,
      basket: basket,
      amount: 1,
    }
  },
  methods: {
    addToBasket() {
      if (this.isInBasket()) {
        this.changeAmount();
        return
      }

      this.basket.cards.push({
        id: this.id,
        title: this.title,
        value: this.value,
        amount: this.amount,
    }) 

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
      let value = 0,
      itemCount = 0;
      this.basket.cards.forEach(item => {
        value += (item.value * item.amount);
        itemCount += item.amount;
      })

      this.basket.itemCount = itemCount;
      this.basket.accumulatedValue = value;
    },
    setAmount(input) {
      this.amount = parseInt(input.value);
    },
    changeAmount() {
      this.basket.cards.forEach((item, index) => {
        if(item.id === this.id) {
          this.basket.cards[index].amount = this.amount;
        }
      })

      this.accumulateValue();
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
  border-radius: 7px;
  margin: 0 16px 24px;
  max-width: 300px;
}

.card__head {
  border-radius: 7px 7px 0 0;
  overflow: hidden;
}

.card__body {
  box-shadow: 0 2px 15px -9px rgba(color('black'), 0.5);
  padding: 16px;
}

.card__headline {
  display: flex;
  font-family: 'TradeGothic';
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

.card__basket {
  border-bottom: 4px solid color('ci');
  cursor: pointer;
  color: color('ci');
  display: inline-block;
  font-size: 18px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.card__more-info-btn {
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 26px;
}

.card__more-info {
  font-size: 16px;
}
</style>
