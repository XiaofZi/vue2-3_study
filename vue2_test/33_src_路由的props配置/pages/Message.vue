<template>
    <div>
        <ul>
            <li v-for="value in messageList" :key="value.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${value.id}/${value.title}`">{{value.title}}</router-link>&nbsp;&nbsp; -->
                
                <!-- 跳转路由并携带params参数，to的对象写法，下面必须使用name参数，不能使用path参数，不然会报错 -->
                <router-link :to="{
                    name:'xiangqing',
                    query:{
                        id:value.id,
                        title:value.title
                    }
                }">
                    {{value.title}}
                </router-link>

            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    }
}
</script>