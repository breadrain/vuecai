import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';

import 'common/stylus/index.styl';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
});
