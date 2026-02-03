<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <!-- include属性的值是组件名，不是路由名,多个就写数组形式 -->
            <!-- <keep-alive include="['News','Message']"> -->
            <keep-alive include="News">
                <router-view></router-view>
            </keep-alive>

        </div>
    </div>
</template>

<script>
import Message from './Message.vue';
import News from './News.vue';

export default {
    name: 'Home',
    components: {
        Message,
        News,
    },
    beforeDestroy(){
        console.log('news即将被销毁');
        
    }
}
</script>