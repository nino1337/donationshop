<template>
  <div class="donate-shop">
    <div v-if="!isFinished">
      <div class="donate-shop__steps donate-shop__content">
        <Step :step="'Spende'" :active="currentStep === 1" @click.native="prevStep"/>
        <Step :step="'Grusskarte'" :active="currentStep === 2" />
      </div>
        <div class="donate-shop__basket">
          <Basket @basket-btn-clicked="stepHandler" :step="currentStep"/>
        </div>
        <div class="donate-shop__journey">
          <transition name="step-1">
          <section v-show="currentStep === 1">
            <div class="donate-shop__cards">
              <Card v-for="card in donateShopData.cards"
                :key="card.id"
                :id="card.id"
                :image="card.image"
                :title="card.title"
                :isSpecial="card.isSpecial"
                :value="card.value"
                :moreInfo="card.moreInfo" />
            </div>
          </section>
        </transition>
        <transition name="step-2">
          <section  v-show="currentStep === 2">
            <div class="donate-shop__content">
              <h2>Wählen sie einen Anlass</h2>
              <p>Für Jeden Geschenkanlass, haben wir liebevolle Grußkarten für Sie zur Auswahl. Sie können die Krußkarten dann herunterladen und für Ihre Liebsten ausdrucken und verschenken.</p>
            </div>
              <div class="donate-shop__occasions">
              <Occasion v-for="occasion in donateShopData.occasions"
                :key="occasion.id"
                :id="occasion.id"
                :image="occasion.image"
                :imageLightbox="occasion.imageLightbox"
                :title="occasion.title" />
            </div>
          </section>
        </transition>
      </div>
    </div>
    <div v-else>
      <div class="donate-shop__iframe" ref="donationIframe">
        <Basket @basket-btn-clicked="stepHandler"/>
      </div>
    </div>
  </div>
</template>

<script>
import Step from './components/Step.vue';
import Card from './components/step1/Card.vue';
import Occasion from './components/step2/Occasion.vue';
import Basket from './components/Basket.vue';
import basket from './basket.js';

export default {
  name: 'app',
  components: {
    Step,
    Card,
    Basket,
    Occasion,
  },
  data() {
    return {
      donateShopData: {},
      activeStep: 1,
      basket: basket,
      isFinished: false,
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
      } else if (this.basketFilled()) {
        this.isFinished = true;
        this.showDonationForm();
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
    showDonationForm() {
      const donationForm = document.getElementById('shop-iframe');    

      donationForm.style.display = 'block';
    },
    basketFilled() {
      return this.basket.cards.length && Object.keys(this.basket.occasion).length
    }
  }
};
</script>

<style lang="scss">
@import './assets/scss/main.scss';

body {
  margin: 0;
}

.donate-shop__basket {
  margin-bottom: 24px;
}

.donate-shop__content {
  margin: 0 auto 40px;
  max-width: $donate-shop-content-width;
  padding: 0 16px;
}

.donate-shop__journey {
  position: relative;
}

.donate-shop__steps {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;

  @include respondMin(point('min-md')) {
    justify-content: space-between;
    margin-bottom: 24px;
  }
}

.donate-shop__cards,
.donate-shop__occasions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.donate-shop__cards {
  align-items: flex-start;
  @include respondMin(point('min-md')) {
    max-width: 768px;
  }

  @include respondMin(point('min-xl')) {
    max-width: none;
  }
}

//
//
// ANIMATIONS
//
//

.step-1-leave-active,
.step-2-leave-active {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  transition: transform .3s ease-out;
}

.step-1-enter-active,
.step-2-enter-active {
  transition: transform .3s ease-out;
}

.step-1-enter, .step-1-leave-to {
  transform: translateX(-150%);
}

.step-2-enter, .step-2-leave-to {
  transform: translateX(150%);
}
</style>
