export default {
    install(Vue,x,y,z) {
        console.log('xyz',x,y,z);
        
        console.log('@@@install', Vue);

        // 全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时被调用（一上来）
            bind(element, binding) {
                console.log('bind', this); // 这里的this是window
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                console.log('inserted', this); // 这里的this是window
                element.focus()
            },
            // 指令所在模板被解析时
            update(element, binding) {
                console.log('update', this); // 这里的this是window
                element.value = binding.value
            }
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 给Vue原型上添加一个hello方法（vm和vc就都能用了）
        Vue.prototype.hello = ()=>{alert('hello')}
    }
}

