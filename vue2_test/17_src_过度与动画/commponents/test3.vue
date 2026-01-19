<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <Transition-group 
            name="animate__animated animate__bounce"
            appear
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
            >
            <h1 v-show="isShow" key="1">你好啊</h1>
            <h1 v-show="isShow" key="2">sgg</h1>
        </Transition-group>

    </div>
</template>

<script>
import 'animate.css';
export default {
    name: "Test2",
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
h1 {
    background-color: aqua;
}
</style>