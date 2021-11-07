import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";
import axios from "axios";

// Vue.prototype.$qs = qs;


Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/font.css'

import mavonEditor from "mavon-editor"
import "mavon-editor/dist/css/index.css"
Vue.use(mavonEditor)

Vue.use(ElementUI)


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {undefined
  return routerPush.call(this, location).catch(error=> error)
}


router.beforeEach((to, from, next) => {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 40;
    if (top <= 1) {
      clearInterval(timeTop);
    }
  }, 10);
  next()
})

