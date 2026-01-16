<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'School',
    data() {
        return {
            name: 'sgg',
            address: 'BeiJing'
        }
    },
    methods: {
        demo(msgName, data) {
            console.log(this);    
            console.log('有人发布了hello消息，hello消息的回调执行了', msgName, data);
        }
    },
    mounted() {
        // this.$bus.$on('hello',(data)=>{
        //     console.log('school,收到了数据data',data);
        // })
        this.pubId = pubsub.subscribe('hello', this.demo)
    },
    beforeDestroy() {
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
    }
}
</script>
<style>
.school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>