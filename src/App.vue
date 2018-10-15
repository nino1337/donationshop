<template>
  <div class="donate-shop">
    <div v-if="!isFinished">
      <div class="donate-shop__steps donate-shop__content">
        <Step :step="'Spende auswählen'" :active="currentStep === 1" @click.native="prevStep(false)"/>
        <Step :step="'Grusskarte auswählen'" :active="currentStep === 2" />
      </div>
        <div class="donate-shop__basket">
          <Basket @basket-btn-clicked="stepHandler" @itemRemoved="prevStep" :step="currentStep" :is-plain="false"/>
        </div>
        <div class="donate-shop__journey">
          <transition name="step-1">
          <section v-show="currentStep === 1">
            <div class="donate-shop__cards">
              <Card v-for="card in donateShopData.cards"
                :key="card.id"
                :id="card.id"
                :uid="card.uid"
                :image="card.image"
                :title="card.title"
                :isSpecial="card.isSpecial"
                :value="card.value"
                :moreInfo="card.moreInfo"
                :occasionImages="card.occasionImages"
                :currUrl="currUrl" />
            </div>
          </section>
        </transition>
        <transition name="step-2">
          <section  v-show="currentStep === 2">
            <div class="donate-shop__content">
              <h2>{{donateShopData.content.title}}</h2>
              <p>{{donateShopData.content.text}}</p>
            </div>
              <div class="donate-shop__occasions">
              <Occasion v-for="(occasion, index) in donateShopData.occasions"
                :key="occasion.id"
                :id="occasion.id"
                :uid="occasion.uid"
                :title="occasion.title"
                :index="index"
                :currUrl="currUrl" />
            </div>
          </section>
        </transition>
      </div>
    </div>
    <div v-else>
        <Basket @basket-btn-clicked="stepHandler" :is-plain="true"/>
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
      currUrl: '',
    }
  },
  created() {
    this.donateShopData = donateShopData;
    this.currUrl = window.location.href;
  },
  computed: {
    currentStep() {
      return this.activeStep;
    },
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

      this.$emit('next-step'); // emit event 'next-step' to hide more info in card component
    },
    prevStep(triggeredFromBasket) {
      if (triggeredFromBasket) {
        if (this.basket.cards.length === 0 && this.activeStep === 2) {
          this.activeStep--;
          return
        }
      } else if (this.activeStep === 2) {
        this.activeStep--;
      }
    },
    showDonationForm() {
      this.provideAmount();
      this.provideBasketInfo();

      const donationForm = document.getElementById('shop-iframe');
      const event = new CustomEvent('donateShopFinished');
      document.dispatchEvent(event);

      donationForm.style.display = 'block';
    },
    provideAmount() {
      // global variable that contains donate shop data
      donateShopData.amount = this.basket.accumulatedValue;
    },
    provideBasketInfo() {
      const occasionId = 'o-' + this.basket.occasion.uid;
      let productId = '';

      this.basket.cards.forEach(item => {
        productId += '_p-' + item.uid;
      });
      // global variable that contains donate shop data
      donateShopData.basket = occasionId + productId;
    },
    basketFilled() {
      return this.basket.cards.length && Object.keys(this.basket.occasion).length
    },
  }
} 
</script>

<style lang="scss">
@import './assets/scss/main.scss';

#shop-iframe {
  min-height: 100vh;
}

body {
  margin: 0;
}

.donate-shop {
  margin-bottom: 64px;
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
  margin-bottom: 30px;
  flex-wrap: wrap;

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
    margin: 0 -16px;
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
