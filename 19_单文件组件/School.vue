<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">showName</button>
    </div>
</template>

<script>
// 组件交互相关的代码
Vue.config.productionTip = false  //阻止vue在启动时生成生产提示
// 1.创建school组件
export default ({
    name:'School',
    data() {
        return {
            name: 'sgg',
            address: '北京'
        }
    },
    methods: {
        'showName'() {
            console.log('showname', this);

        }
    },
})
</script>

<style>
/* 组件的样式 */
.demo {
    background-color: skyblue;
}
</style>