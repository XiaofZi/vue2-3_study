<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
// 组件交互相关的代码

// 1.创建school组件
export default ({
    name:'School',
    data() {
        return {
            name: 'sgg',
            address: '北京'
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