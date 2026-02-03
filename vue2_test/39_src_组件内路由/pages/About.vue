<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'About',
    // 通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        console.log('App------beforeRouteEnter');

        if (to.meta.isAuth) {  // 判断是否需要路由鉴权
            if (localStorage.getItem('school') === 'atguigu') {
                next()
            }
        }
        else {
            next()
        }

    },
    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        console.log('App------beforeRouteEnter');
        next()
    }
}
</script>