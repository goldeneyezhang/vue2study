import Vue from 'vue'
import App from './App.vue'
import router from './routes'
new Vue({
  el: '#app',
  //将路由实例添加到vue实例中
  router,
  render: h => h(App)
})
