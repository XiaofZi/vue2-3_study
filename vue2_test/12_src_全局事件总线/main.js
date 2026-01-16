// 引入Vue和App
import Vue from "vue";
import App from "./App.vue";

// 关闭Vue的生产提示
Vue.config.productionTip = false

const vm = new Vue({
    el:'#app',
    render: h => h(App),
    // 安装全局事件总线  $bus就是当前应用的vm
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})

console.log(vm);
