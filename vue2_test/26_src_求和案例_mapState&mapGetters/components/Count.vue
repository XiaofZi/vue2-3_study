<template>
    <div>
        <h2>当前求和为：{{ sum }}</h2>
        <h2>bigSum: {{ bigSum }}</h2>
        <h2>学校：{{ school }}</h2>
        <h2>学科：{{ subject }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
    name: 'Count',
    data() {
        return {
            n: 1,  //用户选择的数据
        }
    },
    computed: {
        // 靠程序员自己写计算属性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },    
        
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject']),
        /* ----------------------------------------------------------------------------- */
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        // 借助mapGetters生成计算属性，从state中读取数据（对象写法）
        ...mapGetters({bigSum:'bigSum'},)
        // 借助mapGetters生成计算属性，从state中读取数据（数组写法）
        // ...mapGetters(['bigSum']),
    },
    methods: {
        increment() {
            this.$store.dispatch('jia', this.n)
        },
        decrement() {
            this.$store.dispatch('jian', this.n)
        },
        incrementOdd() {
            this.$store.dispatch('jiaOdd', this.n)
        },
        incrementWait() {
            this.$store.dispatch('jiaWait', this.n)
        },
    },
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>
