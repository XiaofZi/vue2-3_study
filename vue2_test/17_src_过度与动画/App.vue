<template>
    <div>
        <Test></Test>
        <Test2></Test2>
        <Test3></Test3>
    </div>
</template>

<script>
// 引入组件
import Test from './commponents/test.vue';
import Test2 from './commponents/test2.vue';
import Test3 from './commponents/test3.vue';

export default {
    name: 'App',
    components: {
        Test,
        Test2,
        Test3
    }
}
</script>
