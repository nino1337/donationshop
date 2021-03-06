import Vue from 'vue';
import App from './App.vue';
import Lightbox from './components/Lightbox.vue';

// polyfills mainly for ie11
import './polyfills/customEvents';
import 'core-js/fn/array/includes';
// smooth scolling
import './smoothScroll/index';

Vue.component('Lightbox', Lightbox);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
