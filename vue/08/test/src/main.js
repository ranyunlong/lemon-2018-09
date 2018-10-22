// 这个是加载的node_modules里的依赖
// const Vue = require('vue')
// windows里文件名是不区分大小写的（一定要注意 ）
// const App = require('./App.vue')
// 在导入文件时 文件名是大写就用大写 小写就用小写
import Vue from 'vue'

// 一个.vue后缀的单文件组件 默认是一个对象 其实就是局部私有组件
import App from './App.vue'
import Test from './components/Test.vue'

// 全局组件
Vue.component('AAA',  {
  template: `<div>aaa</div>`
})

// 把局部组件注册为全局组件
// Vue.component('Test', Test)


// Vue的配置属性
Vue.config.productionTip = false

console.log(App)


// 全局注册的组件要写到new Vue 之前
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    App // 私有组件
  },
  template: '<App/>'
})
