// 该文件用于创建vuex中最为核心的store

import Vue from "vue";
// 引入vuex
import Vuex from "vuex"

// 使用插件
Vue.use(vuex)
// 引入VueX
import vuex from 'vuex';

// 准备actions，用于响应组件中的动作
const actions = {
    jia(context,value) {
        context.commit('JIA',value)
    },
    jian(context,value){
        context.commit('JIAN',value)
    },
    jiaOdd(context,value){
        if (state.sum % 2) {
            context.commit('JIAODD',value)
        }
    },
    jiaWait(context,value){
        setTimeout(() => {
            context.commit('JIAWAIT',value)
        }, 500);
    },
    // 下面的方法和person相关
    addPerson(context,value){
        context.commit('ADDPERSON',value)
    }
}

// 准备mutations，用于操作数据
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    JIAODD(state,value){
        state.sum += value
    },
    JIAWAIT(state,value){
        state.sum += value
    },
        // 下面的方法和person相关
    ADDPERSON(state,value){
        state.personList.unshift(value)
    }
}

// 准备state，用于存储数据
const state = {
    sum: 0, //当前的和
    school:'sgg',
    subject:'前端',
    personList:[
        {id:'001',name:'张三'},
    ]
}

// 准备getters，用于将Store中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
// 创建Store
const store = new Vuex.Store({
    actions: actions,
    mutations,
    state,
    getters
})

// 暴露store
export default store;