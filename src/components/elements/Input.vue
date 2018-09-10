<template>
  <div class="input">
    <div class="input__dropdown-wrapper">
      <select class="input__dropdown" @change="$emit('amountChanged', $event.target)" v-model="selected">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="input__text">
      im Wert von
    </div>
    <div class="input__value">{{value}}€</div>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['value','amount'],
  data() {
    return {
      selected: ''
    }
  },
  created() {
    this.selected = this.amount;
  },
  watch: {
    amount() {
      this.selected = this.amount;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/partials/functions";
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";

.input {
  display: flex;
  margin-bottom: 24px;
}

.input__dropdown-wrapper {
  margin-right: 16px;
  position: relative;

  &::before {
    content: url('/icons/quantity.svg');
    position: absolute;
    pointer-events: none;
    right: 16px;
    z-index: 1;
  }
}

.input__dropdown {
  appearance: none;
  background-color: color('white');
  border-radius: 0;
  font-size: 16px;
  padding: 8px 32px 8px 16px;
}

.input__text {
  font-size: 16px;
  line-height: 36px;
}

.input__value {
  margin-left: 16px;
  font-size: 24px;
  font-family: 'TradeGothic';
}

.basket__package {
  .input__dropdown {
    background-color: color('bisquit');
  }
}
</style>
