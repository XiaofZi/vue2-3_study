// 引入Vue和App
import Vue from "vue";
import App from "./App.vue";
// 关闭Vue的生产提示
Vue.config.productionTip = false
// 全局引入混合,所有的vc和vm都会有混合
import { mixin,mixin2 } from './mixin';
Vue.mixin(mixin)
Vue.mixin(mixin2)

// 创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})