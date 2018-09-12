<template>
    <div class="step" :class="{ 'is-active': active }">
      {{step}}
    </div>
</template>

<script>
export default {
  name: 'Step',
  props: ['step', 'active']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/partials/functions";
@import "../assets/scss/partials/variables";
@import "../assets/scss/partials/mixins";

.step {
  border-bottom: 2px solid color('grey');
  color: color('grey');
  counter-increment: step;
  font-family: $ff-deco;
  font-size: 16px;
  line-height: 1.25;
  margin: 0 24px;
  padding-left: 12px;
  position: relative;
  text-transform: uppercase;

  &.is-active {
    border-color: color('ci');
    color: color('ci');
  }

  &::before {
    content: counter(step)'.';
    position: absolute;
    top: 0;
    left: 0;
  }

  @include respondMin(point('min-md')) {
    border-width: 4px;
    font-size: 24px;
    margin: 0;
    padding-left: 32px;
  }
}

</style>
