<template>
    <div class="app">
        <h1>{{ msg }}</h1>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
// 引入School
import School from './commponents/School.vue';
import Student from './commponents/Student.vue';
export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data() {
        return {
            msg: '你好',
            studentName: ''
        }
    }

}
</script>

<style>
.app {
    background-color: grey;
    padding: 5px;
}
</style>