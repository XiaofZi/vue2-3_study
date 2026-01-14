<template>
    <div class="app">
        <h1>{{ msg }}，学生姓名是：{{ studentName }}</h1>

        <!-- 通过父组件给子组件传递 函数类型的props实现：子组件给父组件传递数据 -->
        <School :getSchoolName="getSchoolName" />

        <!-- 通过父组件给子组件 绑定一个自定义事件实现：子组件给父组件传递数据（第一种写法，使用@或者v-on） -->
        <!-- <Student v-on:atguigu="getStudentName" /> -->
        <!-- <Student @atguigu="getStudentName" /> -->
        <!-- <Student @atguigu.once="getStudentName" /> -->

        <!-- 通过父组件给子组件 绑定一个自定义事件实现：子组件给父组件传递数据（第二种写法，使用ref) -->
        <!-- 这种方法更灵活一点，例如下面，增加了一个定时器，3秒之后再绑定事件 -->
        <!-- 第一种方法直接绑定了自定义事件atguigu，
         第二种方法类似于：‘声明’vc上有atguigu自定义事件，我不写这段声明，那么就没有这个自定义事件 
         但是这个‘声明’写在声明周期里，这样就有空间进行其他操作，例如增加定时器
         -->
        <Student ref="student" @demo="m1" @click,native="show"/>
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
            msg:'你好',
            studentName:''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log('学校名字',name);

        },
        getStudentName(name,...parmes) {
            console.log('学生名字',name,parmes);
            this.studentName = name
        },
        m1(){
            console.log('demo事件被触发了');
            
        },
        show(){
            console.log('点击事件被触发了');
            
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this);
            // 绑定自定义事件

            // $on 当atguigu 被触发时
            this.$refs.student.$on('atguigu', this.getStudentName)
            // $once只能被触发一次
            // this.$refs.student.$once('atguigu', this.getStudentName)
        }, 3000);
    }

}
</script>

<style>
.app {
    background-color: grey;
    padding: 5px;
}
</style>