<template>
    <div class="donate-shop__step">
      {{step}}
    </div>
</template>

<script>
export default {
  name: 'Steps',
  props: ['step']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/scss/main.scss';

.donate-shop__step {
  border-bottom: 4px solid color('ci');
  color: color('ci');
  counter-increment: step;
  font-size: 24px;
  padding-left: 32px;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: counter(step)'.';
    position: absolute;
    top: 0;
    left: 0;
  }
}

</style>
