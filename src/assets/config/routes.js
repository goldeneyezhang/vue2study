import Vue from 'vue'
import VueRouter from 'vue-router'

//引入创建的四个页面
import Home from './Home.vue'
import Explorer  from './Explorer.vue'
import Cart from './Cart.vue'
import Me from './Me.vue'
//使用路由实例插件
Vue.use(VueRouter)

export default = new VueRouter({
    mode:"history",
    base:_dirname,
    routes:[
      //将页面组件与path指定的路由关联
      {path:'/home',component:Home},
      {path:'/explorer',component:Explorer},
      {path:'/cart',component:Cart},
      {path:'/me',component:Me}
    ]
  });