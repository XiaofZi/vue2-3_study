// 该文件是整个项目的入口文件
// 引入vue
import Vue from 'vue'
// 引入App组件，他是所有组件的父组件
import App from './App.vue'

import './assets/main.css'

Vue.config.productionTip = false  //阻止vue在启动时生成生产提示

// 创建Vue实例对象---vm
new Vue({
  // el的第一种写法
  el:'#app',
  // 下面这行代码一会解释，完成了这个功能：将App组件放入容器中
  render: (h) => h(App)
})//.$mount('#app') // el的第二种写法


