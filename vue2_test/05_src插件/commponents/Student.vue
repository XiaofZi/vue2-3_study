<template>
    <div>
        <h2>名字：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
        <input type="text" v-fbind:value="name">
        <button @click="test">点我测试hello方法</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            sex: '男'
        }
    },
    methods: {
        test(){
            this.hello()
        }
    },

}
</script>
