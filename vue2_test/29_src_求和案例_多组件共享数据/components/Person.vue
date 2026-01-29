<template>
    <div>
        <h3>上面组件的sum是：{{ sum }}</h3>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入名字" v-model="name">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },
    methods: {
        addPerson() {
            let person = { id: nanoid(), name: this.name }
            this.$store.dispatch('addPerson', person)
            this.name = ''
        }
    }
}
</script>