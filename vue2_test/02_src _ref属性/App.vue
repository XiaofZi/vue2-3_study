<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <School ref="sch" />
        <button ref="btn" @click="showDom">展示上面的dom</button>
    </div>
</template>

<script>
// 引入School
import School from './commponents/School.vue';
export default {
    name: 'App',
    components: {
        School
    },
    data() {
        return {
            msg: '欢迎学习Vue'
        }
    },
    methods: {
        showDom() {
            console.log(this.$refs.title); //真实dom元素
            console.log(this.$refs.btn);   //真实dom元素
            console.log(this.$refs.sch);   //组件实例对象(vc)
        }
    }
}
</script>