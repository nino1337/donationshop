import Vue from 'vue';
import App from './App.vue';
import Lightbox from './components/Lightbox.vue';

// smooth scolling
import vueSmoothScroll from 'vue2-smooth-scroll';

Vue.use(vueSmoothScroll);

Vue.component('Lightbox', Lightbox);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
