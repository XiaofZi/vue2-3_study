<template>
    <div>
        <School/>
        <hr>
        <Student></Student>
    </div>
</template>

<script>
// 引入School
import Student from './commponents/Student.vue';
import School from './commponents/School.vue';
export default {
    name: 'App',
    components: {
        School,
        Student
    },

}
</script>