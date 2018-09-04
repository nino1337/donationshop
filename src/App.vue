<template>
  <div class="donate-shop">
    <div class="donate-shop__steps donate-shop__content">
      <Step :step="'Spende'" />
      <Step :step="'Grusskarte'" />
    </div>
    <Basket />
    <div class="donate-shop__cards">
      <Card :special="true"/>
      <Card />
      <Card />
      <Card />
    </div>
    <div class="donate-shop__content">
      <h2>Und so funktionierts</h2>
    </div>
  </div>
</template>

<script>
import Step from './components/Step.vue';
import Card from './components/Card.vue';
import Basket from './components/Basket.vue';

export default {
  name: 'app',
  components: {
    Step,
    Card,
    Basket
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';
.donate-shop__content {
  margin: 0 auto 25px;
  max-width: $donate-shop-content-width;
}

.donate-shop__steps {
  display: flex;
  justify-content: center;

  @include respondMin(point('min-md')) {
    justify-content: space-between;
  }
}

.donate-shop__cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
