<template>
    <div class="student">
        <h2>名字：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>num:{{ num }}</h2>
        <button @click="add">n++</button>
        <button @click="sendStudentName">给App发送学生名字</button>
        <button @click="unbind">解绑自定义事件</button>
        <button @click="death">销毁当前Student组件的实例（vc）</button>
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
    methods: {
        sendStudentName() {
            // 绑定自定义事件
            this.$emit('atguigu', this.name, 66, 88, 99)
            this.$emit('demo')
        },
        unbind() {
            // 解绑一个自定义事件
            this.$off('atguigu')
            // 解绑多个自定义事件
            // this.$off(['atguigu', 'demo'])
            // 所有的自定义事件全部解绑
            // this.$off()
        },
        // 销毁当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效了
        death() {
            this.$destroy()
        },
        add(){
            this.num++
            console.log('add回调被调用了');
            
        }
    }
}
</script>

<style scoped>
.student {
    background-color: pink;
}
</style>
