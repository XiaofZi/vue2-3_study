<template>
    <div>
        <School name="李四" sex="女" v-bind:age="18"/>
        <hr>
        <School name="张三" sex="男" :age="19"/>
    </div>
</template>

<script>
// 引入School
import School from './commponents/Student.vue';
export default {
    name: 'App',
    components: {
        School
    },

}
</script>