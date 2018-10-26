// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false



// Vue 使用axios模块来完成ajax 操作
// https://www.npmjs.com/package/axios

// http://localhost:8080/api/user
// http://localhost:3000/user

// axios.get('/api/user').then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err)
// })


// axios.post('/api/users/test', { user:'张三' })
//   .then(res => {
//     console.log(res)
//   })
//   .catch()

axios({
  method: 'post',
  url:'/api/users/test',
  data: {
    user:'张三'
  },
  params: {
    type: 'a'
  }, 
  headers: {'RR-RR': 'XMLHttpRequest'},
  responseType: 'stream'
}).then(res=> {
  console.log(res)
})
.catch(err =>{

})


// 路由进入之前调用
// router.beforeEach

router.beforeEach((to, from, next) => {
  // to 是要到哪里去
  // from 你从哪里来
  // next 要不要让你去
  // next()

  // 如果要到的那个路由 的meta 元信息里的auth属性为true 那么就需要验证后才能访问
  if (to.meta.auth) {
    // 如果没有登录就跳转至登录页面
    next('/log.html')
    // 没有放行
  } else {
    next()
  }

})

// 路由进入后调用的
// router.afterEach

// Promise  用来处理异步的


// const a = function(x) {
//   return new Promise(function(resolve, reject) {
//     if (true) {
//       // 第一个参数 resolve传递正确的结果到 Promise 对象的then函数里
//       resolve(x)
//     } else {
//       // 第二个参数 reject 传递错误的结果到catch 函数里
//       reject(new Error('err'))
//     }
//   })
// }

// const b = function(x) {
//   return new Promise(function(resolve, reject) {
//     if (true) {
//       // 第一个参数 resolve传递正确的结果到 Promise 对象的then函数里
//       resolve(x)
//     } else {
//       // 第二个参数 reject 传递错误的结果到catch 函数里
//       reject(new Error('err'))
//     }
//   })
// }

// Promise.all([a(100), b(200)]).then(res=>{
//   ajax()
// })




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
