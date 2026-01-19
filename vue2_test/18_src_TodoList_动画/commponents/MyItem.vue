<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)" />
                <span v-show="!todo.isEdit">{{ todo.title }}</span>
                <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo, $event)"
                    ref="inputTitle">
            </label>
            <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
            <button v-show="!todo.isEdit" class="btn btn-danger" @click="handleEdit(todo)">编辑</button>
        </li>
    </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
    name: 'MyItem',
    // 声明接收todo对象
    props: ['todo'],
    methods: {
        // 勾选/取消勾选
        handleCheck(id) {
            // 通知App组件将对应todo对象的
            // this.checkTodo(id)
            // 全局事件总线写法
            this.$bus.$emit('checkTodo', id)
        },
        // 删除一条todo
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                // 通知App组件删除对应的todo项
                // this.deleteTodo(id)
                // this.$bus.$emit('deleteTodo', id)

                // 发布消息删除todo
                PubSub.publish('deleteTodo', id)
            }
        },
        // 编辑
        handleEdit(todo) {
            if (todo.hasOwnProperty('isEdit')) {
                todo.isEdit = true
            } else {
                this.$set(todo, 'isEdit', true)
            }
            this.$nextTick(function () {
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点的时候修改todo
        handleBlur(todo, event) {
            todo.isEdit = false
            if (!event.target.value.trim()) return alert('输入不能为空')
            this.$bus.$emit('updateTodo', todo.id, event.target.value)
        }
    },

}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover {
    background-color: #ddd;
}

li:hover button {
    display: block;
}
</style>