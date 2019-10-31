import ECChat from '@/plugins/ECChat/ECChat.vue'

export default {
  install(Vue, options) {
    console.log('Installing the ECChat plugin!', Vue, options);
    Vue.component('ec-chat', ECChat);
  }
}