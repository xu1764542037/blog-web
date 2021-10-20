import Vue from "vue";
import VueRouter from 'vue-router'

const Index =() => import("@/views/index/Index")

//1.安装插件
Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/index',
  },
  {
    path: '*',
    redirect: '/index',
  },
  {
    path: '/index',
    component: Index
  },
]

//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router





