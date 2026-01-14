<template>
    <div class="school">
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchoolName">发送学校名字给App</button>
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
    props: ['getSchoolName'],
    methods: {
        sendSchoolName() {
            this.getSchoolName(this.name)
        }
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