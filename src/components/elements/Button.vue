<template>
  <button class="button" :disabled="isDisabled" >
    {{text}} 
    <span class="button__chevron">
      <img src="/icons/button-chevron.svg" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'isDisabled'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/partials/functions";
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";

.button {
  border: 2px solid color('ci');
  background:  color('ci');
  color: color('white');
  box-shadow: 0 5px 4px 0 rgba(color('black'), 0.2);
  border-radius: 100px;
  display: flex;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  padding: 11px 15px;;
  text-align: left;
  transition: background-color .2s linear, border-color .2s linear, color .2s linear;
  width: 260px;
}

.button__chevron {
  margin-left: auto;
  img {
    transform: rotate(90deg);
  }
}
</style>
