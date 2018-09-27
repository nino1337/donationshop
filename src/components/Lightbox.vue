<template>
    <div class="lightbox">
      <div class="lightbox__wrapper">
        <img class="lightbox__image" :src="src" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Lightbox',
  props: ['src']
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
  width: 60%;
}

.lightbox__image {
  display: block;
}

</style>
