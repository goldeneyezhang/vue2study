<template>
    <div id="app">
        <h1>{{title}}</h1>
        <ul class="todos">
           
            <li v-for="(todo,index) in todos"
                :class="{'checked':todo.done}">
               <label>{{index+1}}.{{todo.value}}</label>
               <time>{{todo.created|date}}</time>
            </li>
        </ul>
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