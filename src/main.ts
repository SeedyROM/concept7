import Vue from 'vue';

// @ts-ignore
import { VLazyImagePlugin } from 'v-lazy-image';
// @ts-ignore
import Transitions from 'vue2-transitions';
// @ts-ignore
import VueScrollReveal from 'vue-scroll-reveal';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Transitions);
Vue.use(VLazyImagePlugin);
Vue.use(VueScrollReveal, {
  scale: 1,
  distance: '-50px',
  duration: 800,
  viewOffset: {
    bottom: 250,
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
