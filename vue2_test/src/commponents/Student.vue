<template>
    <div>
        <h2 @click="showName">名字：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
    </div>
</template>

<script>
// 引入一个混合,局部引入
// import { mixin,mixin2 } from '../mixin';
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    // mixins:[mixin,mixin2]
}
</script>
