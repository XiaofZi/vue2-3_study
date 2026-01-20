<template>
    <div class="container">
        <Category title="游戏">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="#">更多游戏</a>
        </Category>
        <Category title="美食">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="#">更多美食</a>
                <a href="#">其他美食</a>
            </div>
        </Category>
        <Category title="技术">
            <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <div class="foot" slot="footer">
                <a href="#">前端</a>
                <a href="#">后端</a>
            </div>
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
.container, .foot {
    display: flex;
    justify-content: space-around;
}

h3 {
    text-align: center;
    background-color: aquamarine;
}

img {
    width: 100%;
}

video {
    width: 100%;
}
</style>