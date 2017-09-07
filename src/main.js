import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './Home.vue'
import Category from './Category.vue'
import ShoppingCart from './Cart.vue'
import Me from './Me.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {name:'Home', path: '/', component: Home},
        {name:'Categories',path: '/categories', component: Category},
        {name:'ShoppingCart',path: '/shopping-cart', component: ShoppingCart},
        {name:'Me',path: '/me', component: Me}
    ]
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
