import Vue from 'vue'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import headers from './views/header.vue'
import footers from './views/footer.vue'
import Vuex from 'vuex'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from './http/index' 
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.component('headers',headers)
Vue.component('footers',footers)
new Vue({
  store,
  router,
  headers,
  components: { App },
  render: h => h(App)
}).$mount('#app')
