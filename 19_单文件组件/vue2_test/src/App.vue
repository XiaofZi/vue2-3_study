<script>
    // 引入组件
    import School from './components/School.vue';
    import Student from './components/Student.vue';

    export default {
        name: 'App',
        components: {
            School,
            Student
        }
    }
</script>

<template>
    <div>
        <img src="./assets/logo.svg" alt="logo">
        <School/>
        <Student/>
    </div>
</template>


<style></style>