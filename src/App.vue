<template>
  <div class="donate-shop">
    <div class="donate-shop__steps">
      <Steps :step="'Spende auswählen'" />
      <Steps :step="'Grusskarte auswählen'" />
    </div>
    <div class="donate-shop__cards">
      <Card :special="true"/>
      <Card />
      <Card />
      <Card />
    </div>
    <h2>Und so funktionierts</h2>
  </div>
</template>

<script>
import Steps from './components/Steps.vue';
import Card from './components/Card.vue';

export default {
  name: 'app',
  components: {
    Steps,
    Card
  },
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.donate-shop__steps {
  display: flex;
  justify-content: space-between;
  margin: 0 auto 25px;;
  max-width: $donate-shop-content-width;
}

.donate-shop__cards {
  display: flex;
  justify-content: center;
}
</style>
