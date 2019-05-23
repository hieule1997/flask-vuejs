// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Notifications from "vue-notification"

Vue.use(Notifications)
Vue.use(BootstrapVue)
Vue.config.productionTip = false


/* eslint-disable no-new */
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
