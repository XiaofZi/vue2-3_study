<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学生名字：{{ name }}</h2>
        <h2>学生年龄：{{ address }}</h2>
        <button @click="showName">showName</button>
    </div>
</template>

<script>
// 组件交互相关的代码
Vue.config.productionTip = false  //阻止vue在启动时生成生产提示
// 1.创建school组件
export default ({
    name: 'Student',
    data() {
        return {
            name: '张三',
            address: 18
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