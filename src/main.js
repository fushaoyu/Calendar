import Vue from 'vue'
import App from './App.vue'
import F_Calender from 'f-calendar';

Vue.use(F_Calender);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
