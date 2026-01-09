<template>
    <div>
        <h2 @click="showName">名字：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
    </div>
</template>

<script>
// import { mixin, mixin2 } from '../mixin';
export default {
    name: 'School',
    data() {
        return {
            name: 'sgg',
            address: 'beijing',
            // data中数据的优先级高于混合中的data
            x: 666
        }
    },
    // mixins: [mixin, mixin2],
}
</script>
