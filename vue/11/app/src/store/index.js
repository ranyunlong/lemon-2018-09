import Vue from 'vue'
import Vuex from 'vuex'

// 注册vuex 插件

Vue.use(Vuex)

// 从本地存储里取出来的
const user = JSON.parse(unescape(sessionStorage.getItem('user'))) || null

console.log(user)

// 创建一个仓库
export default new Vuex.Store({
    state: {
        user: user
    },
    getters: {
        user(state) {
            return state.user
        }        
    },
    mutations: {
        CHANGE_USER(state, data) {
            sessionStorage.setItem('user', escape(JSON.stringify(data)))
            state.user = data
        },
        LOG_OUT(state) {
            sessionStorage.removeItem('user')
            state.user = null
        }
    }
})


// 1. state 仓库的原始数据 {}
// 2. getters 查询器集合 {} 里面包含查询器方法
// 3. mutations 修改器集合{} 里面包含修改方法
