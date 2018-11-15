import Vue from 'vue';

// @ts-ignore
import { VLazyImagePlugin } from 'v-lazy-image';
// @ts-ignore
import Transitions from 'vue2-transitions';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Transitions);
Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
