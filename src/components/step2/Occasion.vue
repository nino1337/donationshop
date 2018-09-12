<template>
  <div class="occasion">
      <div class="occasion__head">
        <img :src="image" />
        <div v-if="isInBasket()" class="occasion__deactivated">
          Um die Karte im Warenkorb zu ändern, einfach einen neuen Anlass auswählen
        </div>
      </div>
      <div class="occasion__body">
        <div class="occasion__headline">
          {{title}}
        </div>
        <div class="occasion__basket" @click="addToBasket">
          in den Warenkorb
        </div>
      </div>
    </div>
</template>

<script>
import basket from '../../basket';

export default {
  name: 'Occasion',
  props: {
  id: Number,
  image: String,
  title: String,
  },
  data() {
    return {
      basket: basket,
    }
  },
  computed: {
    occasion() {
      return this.basket.occasion;
    }
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
}

.occasion__head {
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  position: relative;
}

.occasion__deactivated {
  background-color: rgba(color('black'), 0.65);
  color: color('white');
  font-family: $ff-deco;
  font-size: 24px;
  height: 95%;
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
  cursor: pointer;
  color: color('ci');
  display: inline-block;
  font-size: 18px;
  margin-bottom: 24px;
  text-transform: uppercase;
}
</style>
