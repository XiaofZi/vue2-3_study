<template>
    <div class="student">
        <h2>名字：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="sendStudentName">把学生名给school组件</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            name: '张三',
            age: 18,
            num: 1
        }
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    }
}
</script>

<style scoped>
.student {
    background-color: pink;
}
</style>
