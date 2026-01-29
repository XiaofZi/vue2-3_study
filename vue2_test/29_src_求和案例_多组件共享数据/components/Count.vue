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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
        <h3>下面组件的总人数为：{{ personList.length }}</h3>
    </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
export default {
    name: 'Count',
    data() {
        return {
            n: 1,  //用户选择的数据
        }
    },
    computed: {
        // 借助mapState生成计算属性，从state中读取数据（对象写法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}),

        // 借助mapState生成计算属性，从state中读取数据（数组写法）
        ...mapState(['sum','school','subject','personList']),
        /* ----------------------------------------------------------------------------- */

        // 借助mapGetters生成计算属性，从state中读取数据（对象写法）
        ...mapGetters({bigSum:'bigSum'},)
        // 借助mapGetters生成计算属性，从state中读取数据（数组写法）
        // ...mapGetters(['bigSum']),
    },
    methods: {
        // increment() {
        //     this.$store.dispatch('jia', this.n)
        // },
        // decrement() {
        //     this.$store.dispatch('jian', this.n)
        // },

        // 借助mapMutations 生成对应的方法，方法中会调用commit去联系mutations（对象的写法）
        ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        // 借助mapMutations 生成对应的方法，方法中会调用commit去联系mutations（数组的写法）,调用的名字也要一起改成JIA和JIAN
        // ...mapMutations(['JIA','JIAN']),
        /* ----------------------------------------------------------------------------------- */
        // incrementOdd() {
        //     this.$store.dispatch('jiaOdd', this.n)
        // },
        // incrementWait() {
        //     this.$store.dispatch('jiaWait', this.n)
        // },

        // 对象写法
        ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
        // 数组写法
        // ...mapActions['jiaOdd','jiaWait']
    },
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>
