import Vue from 'vue'
import App from './App.vue'
import ECChat from './plugins/ECChat'

Vue.use(ECChat, {});

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
