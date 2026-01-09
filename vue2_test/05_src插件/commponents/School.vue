<template>
    <div>
        <h2>名字：{{ name | mySlice }}</h2>
        <h2>地址：{{ address }}</h2>
    </div>
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            name: 'sggsgg',
            address: 'beijing',
        }
    },
}
</script>
