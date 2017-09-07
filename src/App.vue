<template>
    <div id="app">
       <div class="tabs">
           <ul>
               <li>
                   <!--使用router-link指向定义的path-->
                   <router-link to="name:'Home'">
                   <div><img src="./assets/images/home.svg"></div>
                   <div>首页</div>
                   </router-link>
               </li>
                <li>
                    <router-link to="name:'Categories'">
                   <div><img src="./assets/images/category.svg"></div>
                   <div>分类</div>
                   </router-link>
               </li>
                 <li>
                    <router-link to="name:'ShoppintCart'">
                   <div><img src="./assets/images/cart.svg"></div>
                   <div>购物车</div>
                   </router-link>
               </li>
                 <li>
                    <router-link to="name:'Me'">
                   <div><img src="./assets/images/me.svg"></div>
                   <div>我</div>
                   </router-link>
               </li>
            </ul>
        </div>
        <div class="content">
            <!--用router-view渲染视图-->
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import './assets/site.less'
    import './assets/todos.less'
    import moment from 'moment'
    import 'moment/locale/zh-cn'
    moment.locale('zh-cn')
    export default {
        name: 'app',
        data () {
            return {
                newTodo:'',
                title: 'vue-todos',
                todos: [{value:"read a book about vue2",done:false,created:moment().valueOf()},
                {value:"supply sample code",done:true,created:moment().valueOf()+30000},
                {value:"write a review",done:false,created:moment().valueOf()-30000000}]
            }
        },
        filters:{
            date(val){
                return moment(val).calendar()
            }
        }
    }
</script>