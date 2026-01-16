<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: 'sgg',
            address: 'BeiJing'
        }
    },
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('school,收到了数据data',data);
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>
<style>
.school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>