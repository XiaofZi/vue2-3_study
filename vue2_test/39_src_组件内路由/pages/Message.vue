<template>
    <div>
        <ul>
            <li v-for="value in messageList" :key="value.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${value.id}/${value.title}`">{{value.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 跳转路由并携带params参数，to的对象写法，下面必须使用name参数，不能使用path参数，不然会报错 -->
                <router-link :to="{
                    name: 'xiangqing',
                    query: {
                        id: value.id,
                        title: value.title
                    }
                }">
                    {{ value.title }}
                </router-link>
                <button @click="pushShow(value)">push查看</button>
                <button @click="replaceShow(value)">replace查看</button>

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
            messageList: [
                { id: '001', title: '消息001' },
                { id: '002', title: '消息002' },
                { id: '003', title: '消息003' },
            ]
        }
    },
    methods: {
        pushShow(value) {
            this.$router.push({
                name: 'xiangqing',
                query: {
                    id: value.id,
                    title: value.title
                }
            })
        },
        replaceShow(value) {
            this.$router.replace({
                name: 'xiangqing',
                query: {
                    id: value.id,
                    title: value.title
                }
            })
        },
    },
    beforeDestroy() {
        console.log('message即将被销毁');

    }
}
</script>