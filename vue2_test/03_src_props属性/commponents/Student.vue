<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>名字：{{ name }}</h2>
        <h2>性别：{{ sex }}</h2>
        <h2>年龄：{{ myAge }}</h2>
        <button @click="changeAge">尝试修改收到的年龄</button>
    </div>
</template>

<script>
export default {
    name: 'Student',
    // props的优先级高于data，先准备props，再准备data，所以下面的myAge: this.age，拿到的就是外部传进来的age
    data() {
        return {
            msg: '欢迎学习vue',
            myAge: this.age
        }
    },
    // 1、简单声明接收
    // props:['name','age','sex'],

    // 2、接收的同时对数据进行类型限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    // 3、接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    props: {
        name: {
            type: String,  //name的类型是字符串
            required: true //name是必要的，必须传过来
        },
        age: {
            type: Number,
            default: 99    //默认值是99
        },
        sex: {
            type: String,
            required: true
        }
    },
    methods: {
        // 如果这里的方法修改的是外部传进来的age，虽然浏览器显示的数据会改变，但是控制台会报警告，不允许修改外部传进来的数据
        // 所以采用这个方法：在data中另外定义一个属性myAge，值是接收的 传进来的age,然后用下面的方法修改这个myAge，并且使用的时候也使用myAge.
        // 相当于增加了一层数据赋值
        changeAge() {
            this.myAge ++
        }
    }
}
</script>
