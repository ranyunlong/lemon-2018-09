import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import members from './modules/members'
import users from './modules/users'

let proxyPath = ''
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'developmentdevelopment') {
    proxyPath = '/api'
}

// 注册vuex 插件

Vue.use(Vuex)

// 从本地存储里取出来的
const user = JSON.parse(unescape(sessionStorage.getItem('user'))) || null


// 创建一个仓库
export default new Vuex.Store({
    modules: {
        users,
        members
    },
    state: {
        user: user,
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
    },
    actions: {
        getUsers({ commit }, { page, limit }) {
            return new Promise((resolve, reject) => {
                axios.get(proxyPath+'/getmembers', {
                    params: {
                        page,
                        limit
                    }
                }).then(res => {
                    const { data, total } = res
                    const newData = data.data.map(k => {
                        k.id = k.iid
                        return k
                    })
                    res.data.data = newData
                    resolve(res.data)
                }).catch(err => reject(err))
            })
        },
        login({ commit }, data) {
            return new Promise((reslove, reject) => {
                axios.post(proxyPath + '/login', data).then(res => {
                    if (res.data.code === 1) {
                       commit('CHANGE_USER',  res.data.reulst) 
                    }
                    reslove(res)
                }).catch(err => reject(err))
            })
        }
    }
})


// 1. state 仓库的原始数据 {}
// 2. getters 查询器集合 {} 里面包含查询器方法
// 3. mutations 修改器集合{} 里面包含修改方法


// 把接口封装到vuex 里 有什么好处
// 1. 所有的请求接口都在actions里 维护方便
// 2. 当后端改变数据结构时，前端是不用去维护模板的，只需要拦截一次数据即可
// 3. 就不需要频繁的，去操作 mutations 只需要把相应的接口绑定上mutation 就可以了