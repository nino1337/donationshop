<template>
    <div class="card">
      <div class="card__head">
        <img src="https://picsum.photos/320/200/?random" />
      </div>
      <div class="card__body">
        <div class="card__headline">
          Geburtspacket
          <span v-if="special" class="card__special">beliebt</span>
        </div>
        <Input :value="30"/>
        <div class="card__basket">
          in den Warenkorb
        </div>
        <div class="card__more-info-btn" @click="showMore = !showMore">
          Mehr Informationen
          <span v-if="showMore"><img src="/icons/minus.svg" /> </span>
          <span v-else><img src="/icons/plus.svg" /> </span>
        </div>
        <div v-if="showMore" class="card__more-info">
          12 Kindern  kann  ein  guter  Start  ins  Leben  ermöglicht  werden, indem z.B. bei ihrer Geburt ein steriles Entbindungs-Set genutzt wird. Dieses beinhalten unter anderem eine saubere Unterlage und Seife, damit sich die Neugeborenen nicht mit Keimen infizieren.
        </div>
      </div>
    </div>
</template>

<script>
import Input from './Input';
export default {
  name: 'Card',
  components: {
    Input,
  },
  props: {
    special: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showMore: false,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './../assets/scss/main.scss';

.card {
  border-radius: 7px;
  margin: 0 16px 24px;
  max-width: 300px;
}

.card__head {
  border-radius: 7px 7px 0 0;
  overflow: hidden;
}

.card__body {
  box-shadow: 0 2px 15px -9px rgba(color('black'), 0.5);
  padding: 16px;
}

.card__headline {
  display: flex;
  font-size: 24px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.card__special {
  align-self: center;
  display: inline-block;
  border: 1px solid color('ci');
  border-radius: 3px;
  color: color('ci');
  font-size: 14px;
  line-height: 21px;
  height: 21px;
  margin-left: auto;
  padding: 0 5px;
}

.card__basket {
  border-bottom: 4px solid color('ci');
  cursor: pointer;
  color: color('ci');
  display: inline-block;
  font-size: 18px;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.card__more-info-btn {
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  margin-bottom: 26px;
}

.card__more-info {
  font-size: 16px;
}
</style>
