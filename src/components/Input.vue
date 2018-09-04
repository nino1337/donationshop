<template>
  <div class="input">
    <div class="input__dropdown-wrapper">
      <select class="input__dropdown">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
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
  props: ['classes','value']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './../assets/scss/main.scss';

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
  font-weight: bold;
}

.basket__package {
  .input__dropdown {
    background-color: color('bisquit');
  }
}
</style>
