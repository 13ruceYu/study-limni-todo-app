import 'core-js/stable'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './plugins/toast'

import 'normalize.css'
import './global.less'

Vue.use(Toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
