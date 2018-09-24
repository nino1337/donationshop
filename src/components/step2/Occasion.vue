<template>
  <div class="occasion">
      <div v-if="basket.cards.length" class="occasion__head" @click="toggleLightbox">
        <img class="occasion__image" :src="getOccasionImg()" />
        <transition name="opacity">
          <Lightbox :src="getOccasionLightbox()" v-show="showLightbox"/>
        </transition>
        <transition name="scale">
          <div v-if="isInBasket()" class="occasion__deactivated">
            Um die Karte im Warenkorb zu ändern, einfach einen neuen Anlass auswählen
          </div>
        </transition>
      </div>
      <div class="occasion__body">
        <div class="occasion__headline">
          {{title}}
        </div>
        <a href="#basket" class="occasion__basket" @click="addToBasket" v-smooth-scroll="{duration: 1000, offset: -100}">
          in den Warenkorb
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
  title: String,
  index: Number,
  occasions: Array,
  },
  data() {
    return {
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
        title: this.title
      }

      this.basket.occasion = occasion;
      this.$emit('addedToBasket');
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
          return item.occationUid === this.id
        })


        return occasionImages[0].image;
      }
    },
    getOccasionLightbox() {
      if (this.basket.cards.length) {
      const occasionImages = this.basket.cards[0].occasionImages.filter((item, index) => {
        return item.occationUid === this.id
      })

      return occasionImages[0].imageLightbox;
    }
    }
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
}

.occasion__head {
  border-radius: 7px 7px 0 0;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
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


.occasion__deactivated {
  background-color: rgba(color('black'), 0.65);
  color: color('white');
  font-family: $ff-deco;
  font-size: 24px;
  height: 100%;
  left: 0;
  padding: 15% 24px 0;
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
  z-index: 1;
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
