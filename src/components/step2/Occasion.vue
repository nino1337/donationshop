<template>
  <div class="occasion">
      <div v-if="basket.cards.length" class="occasion__head" 
      :class="{'lightbox-open': showLightbox}" >
        <img class="occasion__image" :src="getOccasionImg()" @click="toggleLightbox"/>
        <img class="occasion__zoom" :src="`${baseUrl}icons/zoom.svg`" />
        <transition name="opacity">
          <Lightbox :src="getOccasionImg()" v-show="showLightbox" @closeClicked="toggleLightbox"/>
        </transition>
        <transition name="scale">
          <div v-if="isInBasket()" class="occasion__deactivated">
            Um die Karte im Geschenkkorb zu ändern, einfach eine andere Grußkarte auswählen
          </div>
        </transition>
      </div>
      <div class="occasion__body">
        <div class="occasion__headline">
          {{title}}
        </div>
        <a :href="currUrl + '#basket'" class="occasion__basket" @click="addToBasket">
          Auswählen
        </a>
      </div>
    </div>
</template>

<script>
import basket from '../../basket';

export default {
  name: 'Occasion',
  props: {
  id: Number,
  uid: Number,
  title: String,
  index: Number,
  occasions: Array,
  currUrl: String,
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      basket: basket,
      showLightbox: false,
    }
  },
  computed: {
    occasion() {
      return this.basket.occasion;
    },
  },
  methods: {
    addToBasket() {
      let occasion = Object.assign({}, this.basket.occasion);

      if (this.isInBasket()) {
        this.clearOccasion();
      }

      occasion = {
        id: this.id,
        uid: this.uid,
        title: this.title
      }

      this.basket.occasion = occasion;
      this.openBasket();
    },
    clearOccasion() {
      this.basket.occasion = {};
    },
    isInBasket() {
      return Object.keys(this.basket.occasion).length;
    },
    toggleLightbox() {
      this.showLightbox = !this.showLightbox
    },
    getOccasionImg() {
      if (this.basket.cards.length) {
        const occasionImages = this.basket.cards[0].occasionImages.filter((item, index) => {
          return item.occationUid === this.uid
        })

        return occasionImages[0].image;
      }
    },
    openBasket() {
      this.basket.basketOpen = true;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/partials/functions";
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";

.occasion {
  border-radius: 7px;
  margin: 24px 16px 0;
  max-width: 350px;
  box-shadow: 0 2px 15px -5px rgba(color('black'), 0.5);

  @include respondMin(point('min-md')) {
    width: 33.33%;
  }
}

.occasion__head {
  border-radius: 7px 7px 0 0;
  height: 0;
  max-width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  &.lightbox-open {
    @include respondMin(point('min-md')) {
      overflow: visible; // fix ie11 position-fixed bug, when parent element has overflow hidden
    }
  }
}

.occasion__image {
  transition: transform 0.3s;

  &:hover {
      transform: scale(1.1);
  }

  @include respondMin(point('min-md')) {
    cursor: pointer;
  }
}

.occasion__zoom {
  bottom: 12px;
  display: none;
  right: 16px;
  pointer-events: none;
  position: absolute;
  width: 20px;
  z-index: 1;

  @include respondMin(point('min-md')) {
    display: block;
  }
}

.occasion__deactivated {
  background-color: rgba(color('black'), 0.65);
  color: color('white');
  display: flex;
  align-items: center;
  font-family: $ff-deco;
  font-size: 18px;
  height: 100%;
  left: 0;
  padding: 0 24px;
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
  z-index: 1;

  @include respondMin(point('min-lg')) {
    font-size: 24px;
  }
}

.occasion__body {
  box-shadow: 0 2px 15px -9px rgba(color('black'), 0.5);
  padding: 16px;
}

.occasion__headline {
  font-family: $ff-deco;
  font-size: 24px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.occasion__basket {
  border-bottom: 4px solid color('ci');
  color: color('ci');
  display: inline-block;
  font-size: 18px;
  font-family: $ff-deco;
  margin-bottom: 24px;
  text-transform: uppercase;
  text-decoration: none;
}

//
//
// ANIMATIONS
//
//
.scale-leave-active,
.scale-enter-active {
  transition: transform 0.3s, opacity 0.3s;
}

.scale-enter {
  opacity: 0;
  transform: scale(0);
}

.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

.opacity-leave-active,
.opacity-enter-active {
  transition: transform 0.3s, opacity 0.3s;
}

.opacity-enter {
  opacity: 0;
}

.opacity-leave-to {
  opacity: 0;
}
</style>
