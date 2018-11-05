<template>
    <div class="lightbox">
      <div class="lightbox__wrapper">
        <img class="lightbox__image" :src="src" />
        <div class="lightbox__close" @click="$emit('closeClicked')">
          <img :src="`${baseUrl}icons/close-img.svg`" />
        </div> 
      </div>
    </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: ['src'],
  data() {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/partials/functions";
@import "../assets/scss/partials/variables";
@import "../assets/scss/partials/mixins";

.lightbox {
  align-items: center;
  background-color: rgba(color('black'), 0.35);
  bottom: 0;
  display: none;
  justify-content: center;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  z-index: 2;

  @include respondMin(point('min-md')) {
    display: flex;
  }
}

.lightbox__wrapper {
  background-color: color('white');
  box-shadow: 0px 0px 5px 0 rgba(0,0,0,0.45);
  border-radius: 4px;
  padding: 20px;
  position: relative;
  top: 104px;
  width: 60%;
}

.lightbox__image {
  display: block;
}

.lightbox__close {
  background-color: color('white');
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 5px;
  position: absolute;
  right: -15px;
  top: -15px;
  z-index: 1;
}

</style>
