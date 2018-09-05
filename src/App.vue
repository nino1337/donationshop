<template>
  <div class="donate-shop">
    <div class="donate-shop__steps donate-shop__content">
      <Step :step="'Spende'" :active="currentStep === 1" @click.native="prevStep"/>
      <Step :step="'Grusskarte'" :active="currentStep === 2" />
    </div>
    <Basket @basket-btn-clicked="stepHandler"/>
    <div class="donate-shop__cards" v-show="currentStep === 1">
      <Card v-for="card in donateShopData.cards"
        :key="card.id"
        :id="card.id"
        :image="card.image"
        :title="card.title"
        :isSpecial="card.isSpecial"
        :value="card.value"
        :moreInfo="card.moreInfo" />
    </div>
    <div class="donate-shop__occasion" v-show="currentStep === 2">

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
    Basket,
  },
  data() {
    return {
      donateShopData: {},
      activeStep: 1,
    }
  },
  created() {
    this.donateShopData = donateShopData;
  },
  computed: {
    currentStep() {
      return this.activeStep;
    }
  },
  methods: {
    stepHandler() {
      if (this.activeStep === 1) {
        this.nextStep();
      } else {
        this.redirectToForm();
      }
    },
    nextStep() {
      this.activeStep++;
    },
    prevStep() {
      if (this.activeStep === 2) {
        this.activeStep--;
      }
    },
    redirectToForm() {
      window.location.href = this.formHref();
    },
    formHref() {
      return 'https://www.google.de';
    }
  }
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
