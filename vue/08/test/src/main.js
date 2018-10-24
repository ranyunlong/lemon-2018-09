// 这个是加载的node_modules里的依赖
// const Vue = require('vue')
// windows里文件名是不区分大小写的（一定要注意 ）
// const App = require('./App.vue')
// 在导入文件时 文件名是大写就用大写 小写就用小写
import Vue from 'vue'

// 一个.vue后缀的单文件组件 默认是一个对象 其实就是局部私有组件
import App from './App.vue'
import Swicher from './components/Swicher'

Vue.component('Swicher', Swicher)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { 
    App // 私有组件
  },
  template: '<App/>'
})
