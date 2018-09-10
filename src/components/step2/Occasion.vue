<template>
  <div class="occasion">
      <div class="occasion__head">
        <img :src="image" />
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
export default {
  name: 'Occasion',
  props: {
  id: Number,
  image: String,
  title: String,
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../assets/scss/partials/functions";
@import "../../assets/scss/partials/variables";
@import "../../assets/scss/partials/mixins";


.occasion {
  border-radius: 7px;
  margin: 0 16px 24px;
  max-width: 300px;
}

.occasion__head {
  border-radius: 7px 7px 0 0;
  overflow: hidden;
}

.occasion__body {
  box-shadow: 0 2px 15px -9px rgba(color('black'), 0.5);
  padding: 16px;
}

.occasion__headline {
  font-family: 'TradeGothic';
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
