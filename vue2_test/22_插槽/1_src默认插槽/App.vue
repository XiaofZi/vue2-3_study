<template>
    <div class="container">
        <Category title="游戏">
            <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>
        <Category title="美食">
            <ul>
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
        </Category>
        <Category title="技术">
            <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    name: 'App',
    components: {
        Category
    },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾'],
            games: ['红色警戒', '穿越火线', '劲舞团'],
            skills: ['《vue》', '《spring Boot》', '《Java》', '《Mysql》'],

        }
    },
}
</script>

<style>
.container {
    display: flex;
    justify-content: space-around;
}

h3 {
    text-align: center;
    background-color: aquamarine;
}
img{
    width: 100%;
}
video{
    width: 100%;
}
</style>