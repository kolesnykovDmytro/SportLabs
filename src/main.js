import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuetify from 'vuetify'
import VuetifyConfirm from 'vuetify-confirm'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
 
Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Да',
  buttonFalseText: 'Ой, нет',
  width: 400
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
