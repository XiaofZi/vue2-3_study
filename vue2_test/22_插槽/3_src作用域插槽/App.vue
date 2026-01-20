<template>
    <div class="container">
        <Category title="游戏">
            <template scope="games">
                <ul>
                    <li v-for="(g, index) in games.games" :key="index">{{ g }}</li>
                </ul>
            </template>
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
}
</script>

<style>
.container,
.foot {
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