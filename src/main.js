import Vue from 'vue'
import App from './App'
import router from './router'
import VueMdl from 'vue-mdl'

Vue.config.productionTip = false

Vue.use(VueMdl)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
