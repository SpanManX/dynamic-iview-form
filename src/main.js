import Vue from 'vue'
import App from './App.vue'
import './plugins/iview.js'
import './assets/font-awesome/scss/font-awesome.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
