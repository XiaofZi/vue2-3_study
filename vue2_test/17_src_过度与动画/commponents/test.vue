<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <Transition name="hello" appear>
            <h1 v-show="isShow">你好啊</h1>
        </Transition>

    </div>
</template>

<script>
export default {
    name: "Test",
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

.hello-enter-active {
    animation: atguigu 1s;
}

.hello-leave-active {
    animation: atguigu 1s reverse;
}

@keyframes atguigu {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0px);

    }
}
</style>